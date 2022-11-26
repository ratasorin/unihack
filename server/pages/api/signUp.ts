// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import prisma from '~prisma/index';
import { v4 as uuidv4 } from 'uuid';
type Success = {
  sessionId: string;
};

type Error = {
  error: string;
};

const pepper = '2b156a9b-ca56-4026-8fd9-db03bcd22781';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Success | Error>,
) {
  const emailExists = await prisma.user.count({
    where: { mail: req.body.mail },
  });
  if (emailExists) res.status(500).json({ error: 'Mail already in use' });
  else if (req.body.password != req.body.password2)
    res.status(500).json({ error: 'Passwords do not match' });
  else {
    const salt = uuidv4();
    const hash = await argon2.hash(req.body.password + salt + pepper);

    try {
      const user = await prisma.user.create({
        data: {
          mail: req.body.mail,
          Password: {
            create: {
              hash: hash,
              salt: salt,
            },
          },
          sessions: {
            create: {
              status: 'active',
            },
          },
        },
        select: {
          sessions: {
            select: { id: true },
            where: { status: 'active' },
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
      });

      if (!user) return;
      const session = user.sessions[0];

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      res.status(500).json({ error: 'An internal error has occurred' });
    }
  }
}

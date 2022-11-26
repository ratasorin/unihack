// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import prisma from '~prisma/index';

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
  const password = await prisma.password.findFirst({
    where: { User: { mail: req.body.mail } },
  });
  const user = await prisma.user.findFirst({
    where: { mail: req.body.mail },
  });

  if (!user) return res.status(500).json({ error: 'Account does not exist' });

  if (!password)
    return res.status(500).json({ error: 'Password does not exist' });

  const { hash, salt } = password;

  if (!argon2.verify(hash, req.body.password + salt + pepper))
    return res.status(500).json({ error: 'Password does not match' });

  try {
    const { id: sessionId } = await prisma.session.create({
      data: {
        status: 'active',
        userId: user.id,
      },
      select: { id: true },
    });
    res.status(200).json({ sessionId });
  } catch (error) {
    res.status(500).json({ error: 'There was an unexpected error !' });
  }
}

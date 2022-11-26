// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import prisma from '~prisma/index';
import { v4 as uuidv4 } from 'uuid';
type Data = {
  name?: string;
};
const pepper = '2b156a9b-ca56-4026-8fd9-db03bcd22781';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const emailExists = await prisma.user.count({
    where: { mail: req.body.mail },
  });
  if (emailExists) res.status(400).json({ name: 'Mail already in use' });
  else if (req.body.password != req.body.password2)
    res.status(401).json({ name: 'Passwords do not match' });
  else {
    const salt = uuidv4();
    const hash = await argon2.hash(req.body.password + salt + pepper);

    try {
      await prisma.user.create({
        data: {
          mail: req.body.mail,
          Password: {
            create: {
              hash: hash,
              salt: salt,
            },
          },
        },
      });
      res.status(200).json({ name: 'ok' });
    } catch (error) {
      res.status(402).json({ name: 'An internal error has occurred' });
    }
  }
}

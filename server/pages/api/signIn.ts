// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import prisma from '~prisma/index';
import dotenv from 'dotenv';

dotenv.config();
type Success = {
  sessionId: string;
};

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Success | Error>,
) {
  res.setHeader('Access-Control-Request-Method', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Request-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Max-Age', '3600');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const password = await prisma.password.findFirst({
    where: { User: { mail: req.body.mail } },
  });
  const user = await prisma.user.findFirst({
    where: { mail: req.body.mail },
  });

  if (!user) return res.status(200).json({ error: 'Account does not exist' });

  if (!password)
    return res.status(200).json({ error: 'Password does not exist' });

  const { hash, salt } = password;

  if (!argon2.verify(hash, req.body.password + salt + process.env.pepper))
    return res.status(200).json({ error: 'Password does not match' });

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
    res.status(200).json({ error: 'There was an unexpected error !' });
  }
}
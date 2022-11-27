// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import prisma from '~prisma/index';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto-js';
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
  const id = req.query.id;

  if (!id) return res.status(500).json({ error: 'User not found' });
  if (Array.isArray(id))
    return res.status(500).json({ error: 'Malformed input' });

  const userId = decodeURIComponent(
    crypto.AES.decrypt(id, process.env.pepperronni || ' ').toString(
      crypto.enc.Utf8,
    ),
  );
  console.log(userId);
  try {
    const user = await prisma.user.update({
      data: {
        mail: req.body.mail,
        verified: true,
        sessions: {
          update: { data: { status: 'active' }, where: { userId: userId } },
        },
      },
      where: { id: userId },
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

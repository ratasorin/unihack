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
  res.setHeader('Access-Control-Request-Method', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Request-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Max-Age', '3600');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const emailExists = await prisma.user.count({
    where: { mail: req.body.mail },
  });
  // if (emailExists)
  // return res.status(500).json({ error: 'Mail already in use' });
  if (req.body.password != req.body.password2)
    return res.status(500).json({ error: 'Passwords do not match' });

  const salt = uuidv4();
  const hash = await argon2.hash(req.body.password + salt + process.env.pepper);

  try {
    const user = await prisma.user.create({
      data: {
        mail: req.body.mail,
        verified: false,
        Password: {
          create: {
            hash: hash,
            salt: salt,
          },
        },
        sessions: {
          create: {
            status: 'pending',
          },
        },
      },
      select: {
        id: true,
        mail: true,
        sessions: {
          select: { id: true },
          where: { status: 'pending' },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!user) return;
    const session = user.sessions[0];
    const url =
      'http://localhost:3000/api/auth/' +
      (await encodeURIComponent(
        crypto.AES.encrypt(user.id, process.env.pepperronni!).toString(),
      ));
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'think.er2869@gmail.com',
        pass: process.env.mail_pass,
      },
    });

    var mailOptions = {
      from: 'think.er2869@gmail.com',
      to: user.mail,
      subject: 'That was easy!',
      text: 'Please click the following link to confirm your email : ' + url,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: 'An internal error has occurred' });
  }
}

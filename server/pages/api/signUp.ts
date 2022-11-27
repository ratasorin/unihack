// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import prisma from '~prisma/index';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
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
  const emailExists = await prisma.user.count({
    where: { mail: req.body.mail },
  });
  if (emailExists)
    return res.status(500).json({ error: 'Mail already in use' });
  if (req.body.password != req.body.password2)
    return res.status(500).json({ error: 'Passwords do not match' });

  const salt = uuidv4();
  const hash = await argon2.hash(req.body.password + salt + process.env.pepper);

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
      argon2.hash(user.id + process.env.pepperronni);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'stanica.andrei-claudiu@moisiltm.ro',
        pass: 'DW.Welt2869',
      },
    });

    var mailOptions = {
      from: 'stanica.andrei-claudiu@moisiltm.ro',
      to: user.mail,
      subject: 'Please click the following link to confirm your email : ' + url,
      text: 'That was easy!',
    };

    transporter.sendMail(mailOptions, function (error, info) {
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

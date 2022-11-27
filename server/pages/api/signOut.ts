// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '~prisma/index';

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
  try {
    await prisma.session.update({
      where: { id: req.body.sessionId },
      data: {
        status: 'expired',
      },
    });
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: 'There was an unexpected error !' });
  }
}

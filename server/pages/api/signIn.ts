// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";
import prisma from "~prisma/index";
import dotenv from "dotenv";

dotenv.config();
type Success = {
	sessionId: string;
};

type Error = {
	error: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Success | Error>
) {
	const { mail, u_password } = JSON.parse(req.body);
	if (!mail || !u_password)
		return res.status(500).json({ error: "Fields are missing!" });

	const password = await prisma.password.findFirst({
		where: { User: { mail: mail } },
	});
	const user = await prisma.user.findFirst({
		where: { mail: mail },
	});

	if (!user) return res.status(500).json({ error: "Account does not exist" });

	if (!password)
		return res.status(500).json({ error: "Password does not exist" });

	const { hash, salt } = password;

	if (!argon2.verify(hash, u_password + salt + process.env.pepper))
		return res.status(500).json({ error: "Password does not match" });

	try {
		const { id: sessionId } = await prisma.session.create({
			data: {
				status: "active",
				userId: user.id,
			},
			select: { id: true },
		});
		res.status(200).json({ sessionId });
	} catch (error) {
		res.status(500).json({ error: "There was an unexpected error!" });
	}
}

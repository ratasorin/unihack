// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";
import prisma from "~prisma/index";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

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
	const { mail, password, confirmPassword } = JSON.parse(req.body);
	if (!mail || !password || !confirmPassword)
		return res.status(500).json({ error: "Fields are missing !" });
	if (password != confirmPassword)
		return res.status(500).json({ error: "Passwords do not match" });

	const salt = uuidv4();
	const hash = await argon2.hash(password + salt + process.env.pepper);

	try {
		const user = await prisma.user.create({
			data: {
				mail,
				verified: false,
				Password: {
					create: {
						hash: hash,
						salt: salt,
					},
				},
				sessions: {
					create: {
						status: "pending",
					},
				},
			},
			select: {
				id: true,
				mail: true,
				sessions: {
					select: { id: true },
					where: { status: "pending" },
					orderBy: { createdAt: "desc" },
					take: 1,
				},
			},
		});

		if (!user) return;
		const session = user.sessions[0];
		const url = "http://localhost:3000/api/auth/" + user.id;
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "think.er2869@gmail.com",
				pass: process.env.mail_pass,
			},
		});

		var mailOptions = {
			from: "think.er2869@gmail.com",
			to: user.mail,
			subject: "That was easy!",
			text:
				"Please click the following link to confirm your email : " +
				url,
		};

		await transporter.sendMail(mailOptions, (error: any, info: any) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});

		res.status(200).json({ sessionId: session.id });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: JSON.stringify(error) });
	}
}

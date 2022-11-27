import React from "react";
import Button from "../components/controls/button";
import Textbox from "../components/controls/textbox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
	const [error, setError] = useState("");
	const router = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const body = Array.from(formData.entries()).reduce(
			(prev, curr) => ({ ...prev, [curr[0]]: curr[1] }),
			{}
		);

		try {
			const response = await fetch("http://localhost:3000/api/signIn", {
				method: "POST",
				body: JSON.stringify(body),
			});

			const data = await response.json();

			console.log(data);

			if ("error" in data) {
				setError(data.error);
			} else {
				if (!data) return;
				localStorage.setItem("session", data.sessionId);
				router("/");
			}
		} catch (error) {
			console.log(error);
			setError(JSON.stringify(error));
		}
	};

	return (
		<>
			{error && (
				<div className="bg-red-500 max-w-md mx-auto rounded-md mt-4 shadow-md px-4 py-2 text-white">
					{error}
				</div>
			)}
			<div className="mx-auto backdrop-blur-sm w-96 m-6 p-4  bg-white-alpha-80 rounded-lg shadow-lg shadow-black-alpha-50 flex flex-col gap-y-4">
				<h1 className="text-2xl text-center">Login</h1>
				<form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
					<label>
						Email:
						<Textbox
							type="email"
							required
							id="mail"
							name="mail"
							className="block w-full"
							placeholder="youremail@example.com"
						/>
					</label>
					<label>
						Password:
						<Textbox
							type="password"
							required
							id="u_password"
							name="u_password"
							className="block w-full"
						/>
					</label>
					<div className="flex justify-center gap-2">
						<Button color="green" type="submit">
							Login
						</Button>
						<Link to="/account/signup" className="btn">
							Create new account
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

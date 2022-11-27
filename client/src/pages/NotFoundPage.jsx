import React from "react";
import Button from "../components/controls/button";
import Sub from "../components/sub";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<Sub>
			<div className="text-center mt-4">
				<h1 className="text-6xl mb-2">404</h1>
				<p className="text-xl mb-2">Page not found.</p>
				<p>
					We searched for it everywhere, but we found <i>nothing</i>.
				</p>
				<p>
					Go back{" "}
					<Link to="/">
						<Button>Home</Button>
					</Link>
				</p>
			</div>
		</Sub>
	);
}

import * as React from "react";
import Button from "../controls/button";
import { Icon } from "@iconify/react";

export default function ThirdStage(params) {
	return (
		<>
			<div className="flex flex-col items-center gap-3">
				<h1 className="text-2xl font-bold text-center">
					3. Ready to practice?
				</h1>
				<p>We saved your work and prepared exercises from it.</p>
				<div className="flex flex-col items-end justify-center mr-4">
					<Button
						onClick={() => {
							params.setStage(3);
						}}
					>
						Start practicing!
					</Button>
				</div>
			</div>
		</>
	);
}

import * as React from "react";
import Button from "../controls/button";
import { Icon } from "@iconify/react";

export default function SecondStage(params) {
	return (
		<>
			<div className="flex flex-col items-center gap-3">
				<h1 className="text-2xl font-bold mb-4 text-center">
					2. Type in the information that you want to learn.
				</h1>
				<div className="w-full">
					<textarea className="textbox bg-white w-full h-60"></textarea>
				</div>
				<div className="flex flex-col items-end justify-center mr-4">
					<Button
						onClick={() => {
							params.setStage(3);
						}}
					>
						Next stage
					</Button>
				</div>
			</div>
		</>
	);
}

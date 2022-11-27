import * as React from "react";
import Button from "../controls/button";
import { Icon } from "@iconify/react";

export default function FirstStage(params) {
	return (
		<>
			<div className="flex flex-col items-center gap-3">
				<h1 className="text-2xl font-bold mb-4 text-center">
					1. How well do you want to master your subject?
				</h1>
				<div className="flex w-full flex-row">
					<div className="flex flex-col gap-2 ml-4">
						<label className="w-44 text-left">
							<input type="checkbox" />
							<span className="ml-2">Only the basics</span>
						</label>
						<label className="w-44 text-left">
							<input type="checkbox" />
							<span className="ml-2">Intermediate</span>
						</label>
						<label className="w-44 text-left">
							<input type="checkbox" />
							<span className="ml-2">God tier knowledge</span>
						</label>
					</div>
					<div className="flex-1 flex items-center justify-center">
						<Icon
							icon="ic:outline-arrow-forward"
							width="100px"
							color="rgba(0,0,0,15%)"
						/>
					</div>
					<div className="flex flex-col items-end justify-center mr-4">
						<Button
							onClick={() => {
								params.setStage(2);
							}}
						>
							Next stage
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

/**************************
 * IMPORTS
 ***************************/
import { React, useState } from "react";

// components
import FirstStage from "../components/practice-options/FirstStage";
import SecondStage from "../components/practice-options/SecondStage";
import ThirdStage from "../components/practice-options/ThirdStage";

/**************************
 * CONFIG
 ***************************/

const PracticePage = () => {
	const [stage, setStage] = useState(1);

	let cardText;

	if (stage === 1) {
		cardText = <FirstStage setStage={setStage} />;
	} else if (stage === 2) {
		cardText = <SecondStage setStage={setStage} />;
	} else {
		cardText = <ThirdStage setStage={setStage} />;
	}

	return (
		<main className="h-main flex flex-wrap flex-col items-center mt-6 p-4">
			<div className="flex flex-col items-center bg-white-alpha-80 rounded-lg shadow-md backdrop-blur-sm">
				<h1 className="text-3xl font-bold p-6 text-center">
					Help us help you customize your learning experience!
				</h1>
				<div className="w-4/5 bg-cardColor backdrop-blur-sm shadow-lg shadow-black-alpha-20 rounded-xl mb-10">
					<div className="m-6">{cardText}</div>
				</div>
			</div>
		</main>
	);
};

export default PracticePage;

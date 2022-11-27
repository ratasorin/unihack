/**************************
 * IMPORTS
 ***************************/
import Timetable from "../components/timetable";
import ForgettingCurve from "../assets/SVG/ForgettingCurve.svg";
import Sub from "../components/sub";

/**************************
 * CONFIG
 ***************************/

const timeTableData = {
	dates: ["10:00", "11:00", "14:00", "20:00", "Day 2", "Day 3", "Week 2"],
	tasks: [
		[
			"Essay - Europe",
			[
				[1, "History", "Recap historical data about Europe."],
				[4, "History", "Recap it again."],
			],
		],
		[
			"Computer Science",
			[
				[2, "Arrays"],
				[6, "Arrays"],
			],
		],
		[
			"French - C1",
			[
				[1, "Pronouns"],
				[5, "Pronouns"],
			],
		],
		[
			"Math - Calculus",
			[
				[3, "Integrals"],
				[5, "Integrals"],
			],
		],
		[
			"Math - Algebra",
			[
				[2, "Complex numbers"],
				[7, "Complex numbers"],
			],
		],
	],
};

const PlannerPage = () => {
	return (
		<>
			<Sub>
				<h1 className="text-3xl text-center font-bold p-2 border-0 border-b-1 border-dotted border-gray-400">
					Revision planner
				</h1>
				<Timetable data={timeTableData} />
			</Sub>
			<Sub>
				<img src={ForgettingCurve} width="500" className="mx-auto" />
			</Sub>
		</>
	);
};

export default PlannerPage;

/**************************
 * IMPORTS
 ***************************/
import { Link } from "react-router-dom";
import ProgressCard from "../components/progressCard";

/**************************
 * CONFIG
 ***************************/
export default function AccountPage() {
	return (
		<>
			<div
				id="bodyBackground"
				style={{
					backgroundImage: "url(/src/assets/green-pattern.jpg)",
				}}
			></div>
			<main className="mx-auto max-w-xl mt-12 bg-white-alpha-80 backdrop-blur-sm rounded-md shadow-md p-4 gap-2 shadow-black-alpha-20 flex flex-col flex-wrap justify-center items-center">
				<h1 className="text-xl">Welcome to your account!</h1>
				<div className="flex gap-2">
					<ProgressCard name="Eseu 1" val="50%" />
					<ProgressCard name="Eseu 2" val="35%" />
				</div>
				<div className="flex gap-2">
					<ProgressCard name="Eseu 3" val="0%" />
					<ProgressCard name="Eseu 4" val="66%" />
				</div>
				<p>
					<Link to="/account/logout" className="btn btn-red">
						Logout
					</Link>
				</p>
			</main>
		</>
	);
}

/**************************
 * IMPORTS
 ***************************/

import { Link } from "react-router-dom";

/**************************
 * CONFIG
 ***************************/
const HomePage = () => {
	return (
		<>
			<main className="mt-12 px-10 flex flex-col flex-wrap rounded-lg shadow-md bg-white-alpha-80 backdrop-blur-sm py-10 justify-center items-center">
				<div className="w-full flex flex-row flex-nowrap ">
					<div className="w-2/3 flex flex-col gap-6">
						<div>
							<h1 className="text-6xl mb-2">Be smart.</h1>
							<h1 className="text-6xl">
								Be a <strong>Think</strong>.er
							</h1>
						</div>
						<p className="text-2xl">
							Customize your learning experience. <br />
							Unlock your potential.
						</p>
						<div>
							<Link
								to="/practice"
								className="btn btn-green text-xl"
							>
								Start learning <i>now</i>.
							</Link>
						</div>
					</div>
					<div className="w-1/3"></div>
					<div className="w-1/3 bg-thinker shadow-lg shadow-black-alpha-50 bg-cover bg-no-repeat rounded-3xl bg-center"></div>
				</div>
			</main>
			<main className="mt-12 px-10 flex flex-col flex-wrap rounded-lg shadow-md bg-white-alpha-80 backdrop-blur-sm py-10 justify-center items-center">
				<div className="w-full h-64 flex flex-row flex-nowrap ">
					<div className="w-2/3">
						<h1 className="italic text-2xl">
							“Study hard what interests you the most in the most
							undisciplined, irreverent and original manner
							possible.”
						</h1>

						<p className="text-right text-xl mr-8 mt-16">
							Richard Feynmann
						</p>
					</div>
					<div className="w-1/3 bg-feynmann shadow-lg shadow-black-alpha-50 bg-cover bg-no-repeat rounded-full bg-center"></div>
				</div>
			</main>
		</>
	);
};

export default HomePage;

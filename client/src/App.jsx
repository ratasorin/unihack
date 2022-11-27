/*******************************
 * IMPORTS
 *******************************/

/*******************************
 * COMPONENTS
 *******************************/

import { Routes, Route, Navigate } from "react-router-dom";

/*******************************
 * PAGES
 *******************************/
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import PlannerPage from "./pages/PlannerPage";
import PracticePage from "./pages/PracticePage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";

/*******************************
 * COM
 *******************************/
function App() {
	let accountRoutes;

	if (localStorage.getItem("session")) {
		accountRoutes = (
			<>
				<Route index element={<Navigate to="account" />} />
				<Route path="login" element={<Navigate to="/account" />} />
				<Route path="signup" element={<Navigate to="/account" />} />
				<Route path="account" element={<AccountPage />} />
			</>
		);
	} else {
		accountRoutes = (
			<>
				<Route index element={<Navigate to="login" />} />
				<Route path="account" element={<Navigate to="login" />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<SignUpPage />} />
			</>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="planner" element={<PlannerPage />} />
				<Route path="practice" element={<PracticePage />} />
				<Route path="account">{accountRoutes}</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;

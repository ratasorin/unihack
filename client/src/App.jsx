/*******************************
 * IMPORTS
 *******************************/
// router
import { Routes, Route } from "react-router-dom";

// components
import { Navbar, Navlink } from "./components/navbar";
import { Page } from './components/page';
import { Icon } from "@iconify/react";

// pages
import HomePage from "./pages/HomePage";
import PlannerPage from "./pages/PlannerPage";
import PracticePage from "./pages/PracticePage";
import AccountPage from "./pages/AccountPage";

/*******************************
 * CONFIG
 *******************************/
function App() {
  return (
    <>
      <Navbar>
        <Navlink href="/practice">Practice</Navlink>
        <Navlink href="/planner">Planner</Navlink>
        <Navlink href="/account">
          <Icon
            icon="ic:baseline-person-outline"
            className="inline-block align-top"
            width="24"
          />
          Account
        </Navlink>
      </Navbar>
      <Page>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/planner" element={<PlannerPage />}></Route>
          <Route path="/practice" element={<PracticePage />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
        </Routes>
      </Page>
    </>
  );
}

export default App;

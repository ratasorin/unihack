/*******************************
 * IMPORTS
 *******************************/

/*******************************
 * COMPONENTS
 *******************************/

import { Routes, Route, Navigate } from 'react-router-dom';

/*******************************
 * PAGES
 *******************************/
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import PlannerPage from './pages/PlannerPage';
import PracticePage from './pages/PracticePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

/*******************************
 * COM
 *******************************/
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='planner' element={<PlannerPage />} />
        <Route path='practice' element={<PracticePage />} />
        <Route path='account'>
          <Route index element={<Navigate to='login' />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

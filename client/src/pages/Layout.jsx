import { Outlet, Link } from 'react-router-dom';
import { NavBar, NavLink } from '../components/NavBar';
import { Icon } from '@iconify/react';
import { Page } from '../components/page';

export default function Layout() {
  return (
    <>
      <NavBar>
        <NavLink to='/practice'>Practice</NavLink>
        <NavLink to='/planner'>Planner</NavLink>
        <NavLink to='/account'>
          <Icon
              icon='ic:baseline-person-outline'
              className='inline-block align-top'
              width='24'
          />
          Account
        </NavLink>
      </NavBar>
      <Page>
        <Outlet />
      </Page>
    </>
  );
}
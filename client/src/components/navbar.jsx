/**************************
 * IMPORTS
 ***************************/
// Styling
import { Icon } from '@iconify/react';

// Router
import { Link } from 'react-router-dom';

/**************************
 * CONFIG
 ***************************/
export function NavLink(props) {
  if (props.to) {
    return (
      <Link 
        to={props.to} 
        className={'hover:underline cursor_pointer ' + props.className}
      >
        {props.children}
      </Link>
    );
  } else {
    return (<span className={props.className + ' block'}>{props.children}</span>);
  }
}

export function NavBar(props) {
  const navbarToggle = () => {
    // Toggle NavBar links visibility for small width screens
    document.getElementById('navbarLinks').classList.toggle('hidden');
    document.getElementById('navbarLinks').classList.toggle('flex');
  };

  return (
    <nav className='NavBar fixed top-0 z-50 left-0 right-0 flex pt-8 pb-2 
      bg-gradient-to-r from-navbar1 to-navbar2 backdrop-blur-sm 
      justify-center shadow-lg shadow-black-alpha-30 cursor-default'>
      <div className='flex-1 drop-shadow-md flex max-w-5xl gap-2 
      text-white justify-start flex-col md:flex-row'>
        <div className='flex-1 flex text-2xl px-2'>
          <div className='flex-1'>
            <NavLink to='/' className='hover:underline active:scale-110'>
              <strong>Think</strong>.er
            </NavLink>
          </div>
          <div className='self-end justify-self-end'>
            <button
              className='md:hidden'
              onClick={navbarToggle}
            >
              <Icon icon='ic:baseline-menu' width='28' />
            </button>
          </div>
        </div>
        <div
          id='navbarLinks'
          className='flex-1 gap-x-4 gap-y-2 p-1.5
          hidden flex-col md:flex md:flex-row
          md:items-end md:justify-end 
          bg-white-alpha-50 text-black 
          md:bg-transparent md:text-white'
        >
          {props.children}
        </div>
      </div>
    </nav>
  );
}

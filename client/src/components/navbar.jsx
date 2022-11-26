import { Icon } from '@iconify/react';

export function Navlink(props) {
    if (props.href) {
        return (
            <a href={props.href} target={props.target} className='hover:underline cursor_pointer'>{props.children}</a>
        );
    } else {
        return (
            <span>{props.children}</span>
        );
    }
}

export function Navbar(props) {
    const navbarToggle = () => {
        // Toggle navbar links visibility for small width screens
        document.getElementById('navbarLinks').classList.toggle('hidden');
        document.getElementById('navbarLinks').classList.toggle('flex');
    };
    
    return (
        <nav className='navbar flex pt-8 pb-2 bg-gradient-to-r from-navbar1 to-navbar2 justify-center shadow-lg cursor-default fixed top-0 left-0 right-0'>
            <div className='flex-1 flex max-w-5xl gap-2 text-white justify-start flex-col md:flex-row'>
                <div className='flex-1 flex text-2xl px-2'>
                    <span className='flex-1'>
                        <strong>Logo</strong> Goes Here
                    </span>
                    <button className='md:hidden self-end justify-self-end'
                        onClick={navbarToggle}>
                        <Icon icon='ic:baseline-menu' width='28' />
                    </button>
                </div>
                <div id='navbarLinks' className='flex-1 gap-x-4 gap-y-2 p-1.5 hidden md:items-end md:justify-end flex-col bg-navbarOpen text-black md:bg-transparent md:text-white md:flex md:flex-row'>
                    {props.children}
                </div>
            </div>
        </nav>
    );
}
import React from "react";

class NavbarLink extends React.Component {
    render() {
        return (
            <a href="#" className="p-0 text-red hover:underline">Link Text</a>
        );
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar flex px-2 pt-8 pb-2 bg-gradient-to-r from-navbar1 to-navbar2 justify-center shadow-lg">
                <div className="flex-1 flex max-w-5xl text-white justify-start">
                    <div className="flex-1 text-2xl">
                        <strong>Logo</strong> Goes Here
                    </div>
                    <div className="flex-1 flex gap-4 items-end justify-end">
                        <NavbarLink />
                        <NavbarLink />
                        <NavbarLink />
                        <NavbarLink />
                    </div>
                    
                    <div className="collapse navbar-collapse">

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
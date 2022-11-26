const NavbarLink = (props) =>   {
    return (
        <a href={props.href} className="p-0 text-red hover:underline">{props.name}</a>
    );
}

export default NavbarLink;
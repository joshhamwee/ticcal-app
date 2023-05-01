import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
    return (
        <div className=" text-light-orange cursor-pointer onHover:text-orange onHover:underline transition">
            {label}
        </div>
    )
}

export default NavbarItem;
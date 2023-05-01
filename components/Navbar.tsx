import { signOut } from "next-auth/react";
import NavbarItem from "./NavbarItem";

import { CgProfile } from 'react-icons/cg'
import { BsChevronDown } from 'react-icons/bs'
import AccountMenu from "./AccountMenu";
import { useCallback, useState } from "react";

const Navbar = () => {

    const [showAccountMenu, setShowAccountMenu] = useState(false);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    return (


        <div className="w-full fixed z-40">
            <div className="
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-greybg
            ">
                <img className="h-9" src="/images/logo.png" alt="logo" />
                <div className="flex-row ml-8 gap-7 flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="My Events" />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-10 h-10 rounded-md overflow-hidden">
                            <CgProfile size={40} color="#96d9fa" />
                        </div>
                        <BsChevronDown className={` text-lightblue fill-lightblue transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;
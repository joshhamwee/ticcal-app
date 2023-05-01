import { signOut } from "next-auth/react";
import React from "react";
import { CgProfile } from 'react-icons/cg';

import useCurrentUser from "@/hooks/userCurrentUser";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    const { data: currentUser } = useCurrentUser();
    if (!visible) {
        return null;
    }
    return (
        <div className="bg-lightblue bg-opacity-10 w-56 absolute top-14 right-0 py-5 flex-col border-2 border-lightblue flex rounded-md">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <CgProfile size={40} color="#96d9fa" />
                    <p className="text-slate-500 text-sm group-hover/item:underline">{currentUser?.name}</p>
                </div>
            </div>
            <hr className="bg-lightblue border-1 border-lightblue h-px my-4" />
            <div onClick={() => signOut()} className="px-3 text-center text-slate-500 text-sm hover:underline">
                Sign out of Ticcal
            </div>
        </div>
    )
}

export default AccountMenu;
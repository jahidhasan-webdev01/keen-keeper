"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        {
            path: "/",
            name: "Home",
            icon: IoHomeOutline
        },
        {
            path: "/timeline",
            name: "Timeline",
            icon: RiTimeLine
        },
        {
            path: "/stats",
            name: "Stats",
            icon: ImStatsDots
        },
    ]
    return (
        <div className="bg-base-100 shadow-sm py-5">
            <div className="container mx-auto flex justify-between">
                <div>
                    <Link href="/">
                        <h1 className="font-extrabold text-3xl">Keen<span className="font-medium">Keeper</span> </h1>
                    </Link>
                </div>
                <div className="flex gap-2">
                    {
                        navLinks.map((nav, index) => {
                            const Icon = nav.icon;

                            return <Link
                                key={index}
                                href={nav.path}
                                className={`flex items-center font-medium gap-1 px-3 py-2 rounded ${pathname === nav.path ? "bg-green-800 text-white" : "text-gray-500"}`}>
                                <Icon />{nav.name}
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
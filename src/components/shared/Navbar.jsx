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
       <div className="bg-base-100 shadow-sm border-b border-gray-200 px-5 md:px-0">
         <div className="container mx-auto navbar">
            <div className="navbar-start">
                <Link href="/">
                    <h1 className="font-extrabold text-3xl">Keen<span className="font-medium">Keeper</span> </h1>
                </Link>
            </div>
            <div className="navbar-end md:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>

                    <div
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow -mr-12"
                    >
                        {
                            navLinks.map((nav, index) => {
                                const Icon = nav.icon;

                                return <Link
                                    key={index}
                                    href={nav.path}
                                    className={`btn ${pathname === nav.path ? "bg-green-800 text-white" : "border-none bg-transparent text-gray-500"} justify-start`}>
                                    <Icon />{nav.name}
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="navbar-end hidden md:flex">
                {
                    navLinks.map((nav, index) => {
                        const Icon = nav.icon;

                        return <Link
                            key={index}
                            href={nav.path}
                            className={`btn ${pathname === nav.path ? "bg-green-800 text-white" : "border-none bg-transparent text-gray-500"}`}>
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
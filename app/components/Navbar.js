"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";

const NAV_ITEMS = [
    {
        label: "Home",
        page: "",
    },
    {
        label: "About Us",
        page: "about",
    },
    {
        label: "Products",
        page: "products",
    },
    {
        label: "Teams",
        page: "teams",
    },
];

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <header className="shadow-lg bg-white">
            <div className="px-5 justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center py-2 justify-between ">
                        <Link href="/">
                            <Image src="/compresslogo.png" width={150} height={100} alt="logo companny" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                aria-label="buttonNavbar"
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="hidden md:flex space-x-4">
                    {NAV_ITEMS.map((item) => (
                        <Link href={`/${item.page}`} key={item.page}>
                            <div className="cursor-pointer text-gray-700 hover:text-gray-900">
                                {item.label}
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
            {navbar && (
                <div className="md:hidden">
                    <nav className="flex flex-col space-y-4">
                        {NAV_ITEMS.map((item) => (
                            <Link href={`/${item.page}`} key={item.page}>
                                <div className="cursor-pointer text-gray-700 hover:text-gray-900">
                                    {item.label}
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
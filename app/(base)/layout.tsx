"use client"
import Button from '@/ui/system/Button/Button';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


type BaseLayoutProps = {
    children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {

    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        setShowMenu(
            !showMenu
        );
    };


    let links = [
        { name: "Télecharger", path: "/download" },
        { name: "Aide", path: "/help" },
        { name: "Conditions d'utilisations", path: "/terms" },
    ];
    return (

        <div>
            <div
                className="flex items-center justify-between w-full px-10 sm:px-3 py-3 bg-white"
            >
                <div className="w-72 md:w-32">
                    <Link href="/" className="text-3xl sm:text-2xl font-bold text-black">Reborn</Link>
                </div>

                <div
                    className={`flex-1 flex justify-center gap-8 md:absolute md:left-0 md:flex-col md:justify-start md:gap-0 md:pt-20 md:pl-12 md:top-0 md:bottom-0 md:w-full ${!showMenu && "hidden"
                        } bg-gray-900`}
                >
                    a
                    {links.map((link) => (
                        <Link
                            href={link.path}
                            className="py-2 md:py-1 text-sm md:text-2xl text-white hover:text-gray-300 transition-colors"
                        >{link.name}</Link>
                    ))}
                </div>

                <div className="flex justify-end items-center">
                    <div className="w-72 md:w-max flex justify-end gap-4">
                        <Link href="/auth/login" className="md:hidden">
                            <Button variant="outline">Se connecter</Button>
                        </Link>
                        <Link href="/auth/signup">
                            <Button>S'inscrire</Button>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <button
                            onClick={toggleMenu}
                            className="relative z-50 ml-auto block w-max pl-4 py-0"
                        >
                            {
                                showMenu ? (

                                    <AiOutlineClose className="w-8 text-white" />
                                ) : (

                                    <AiOutlineMenu className="w-8 text-black" />
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div className="">
                {children}
            </div>

        </div>
    );
}

export default BaseLayout
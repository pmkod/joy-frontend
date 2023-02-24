"use client";
import Button from "@/ui/system/Button/Button";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type BaseLayoutProps = {
    children: React.ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    let links = [
        { name: "Télecharger", path: "/download" },
        { name: "Aide", path: "/help" },
        { name: "Conditions d'utilisations", path: "/terms" },
    ];
    return (
        <div>
            <div className="flex items-center justify-between w-full px-10 sm:px-5 py-4 bg-white">
                <div className="w-72 md:w-32">
                    <Link
                        href="/"
                        className="text-3xl sm:text-2xl font-bold text-black"
                    >
                        Reborn
                    </Link>
                </div>

                <div className={`flex-1 flex justify-center gap-x-8 md:hidden`}>
                    {links.map((link) => (
                        <Link
                            href={link.path}
                            className="py-2 md:py-1 text-sm md:text-2xl text-gray-900 hover:text-gray-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex justify-end items-center">
                    <div className="w-72 md:w-max md:hidden flex justify-end gap-4">
                        <Link href="/auth/login" className="">
                            <Button variant="outline">Se connecter</Button>
                        </Link>
                        <Link href="/auth/signup">
                            <Button>S'inscrire</Button>
                        </Link>
                    </div>

                    <div className="hidden relative md:block">
                        <button
                            onClick={toggleMenu}
                            className="relative z-50 ml-auto block w-max pl-4 py-0"
                        >
                            {showMenu ? (
                                <AiOutlineClose className="w-8 text-black" />
                            ) : (
                                <AiOutlineMenu className="w-8 text-black" />
                            )}
                        </button>

                        <div
                            className={`z-40 fixed inset-0 bg-white ${
                                showMenu ? "visible" : "invisible"
                            }`}
                        >
                            <div className="h-full py-12 px-8 flex flex-col justify-between">
                                <div className="">
                                    {links.map((link) => (
                                        <Link
                                            href={link.path}
                                            className="block py-4 font-medium border-b text-lg text-gray-700"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex gap-x-4">
                                    <Button
                                        variant="outline"
                                        size="md"
                                        fullWidth
                                    >
                                        Se connecter
                                    </Button>

                                    <Button variant="fill" fullWidth>
                                        S'inscrire
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">{children}</div>
        </div>
    );
};

export default BaseLayout;

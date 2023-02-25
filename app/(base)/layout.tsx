"use client";
import Button from "@/ui/system/Button/Button";
import Link from "next/link";
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";

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
        <div className="">
            <div className="bg-yellow-300 flex items-center justify-between w-full px-10 sm:px-5 py-4">
                <div className="w-72 md:w-max">
                    <Link
                        href="/"
                        className="text-3xl sm:text-2xl font-bold text-black"
                    >
                        Reborn
                    </Link>
                </div>

                {/* <div className={`flex-1 flex justify-center gap-x-8 md:hidden`}>
                    {links.map((link) => (
                        <Link
                            href={link.path}
                            className="py-2 md:py-1 text-sm md:text-2xl text-gray-900 hover:text-gray-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div> */}

                <div className="flex justify-end items-center">
                    <div className="w-72 md:w-max md:hidden flex justify-end">
                        <Link href="/download">
                            <Button variant="fill" leftIcon={<FiDownload />}>
                                Télécharger l'application
                            </Button>
                        </Link>
                    </div>

                    <div className="hidden sm:block">
                        <Link href="/download">
                            <Button variant="fill" size="md">
                                Obtenir l'application
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="">{children}</div>
        </div>
    );
};

export default BaseLayout;

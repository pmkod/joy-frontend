"use client";
import Button from "@/ui/system/Button/Button";
import Link from "next/link";
import React from "react";

const FooterGroup = () => {
    return (
        <div className="w-52">
            <div className="text-xl font-medium text-gray-800 mb-5">
                Company
            </div>
            <div className="flex flex-col gap-y-1 items-start text-gray-600">
                <Link
                    href="/"
                    className="hover:text-gray-800 border-b border-b-transparent hover:border-b-gray-600"
                >
                    Carrers
                </Link>
                <Link
                    href="/"
                    className="hover:text-gray-800 border-b border-b-transparent hover:border-b-gray-600"
                >
                    News
                </Link>
                <Link
                    href="/"
                    className="hover:text-gray-800 border-b border-b-transparent hover:border-b-gray-600"
                >
                    About
                </Link>
                <Link
                    href="/"
                    className="hover:text-gray-800 border-b border-b-transparent hover:border-b-gray-600"
                >
                    Party
                </Link>
            </div>
        </div>
    );
};

const page = () => {
    return (
        <div className="bg-yellow-300">
            <div className="h-screen text-center flex flex-col items-center">
                <p className="mt-20 sm:mt-12 w-2/3 text-center text-7xl md:text-5xl sm:font-medium sm:w-full sm:text-lg text-grey-800 font-semibold">
                    Bienvennue sur joy votre espace agreable
                </p>

                <div className="mt-10 text-xl md:text-lg w-2/5 md:w-4/5 text-center text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt et neque temporibus.
                </div>

                <div className="flex gap-x-4 sm:gap-x-2 mt-14">
                    <Link href="/auth/login">
                        <Button size="lg" variant="outline" colorScheme="dark">
                            Se connecter
                        </Button>
                    </Link>
                    <Link href="/auth/signup">
                        <Button size="lg" colorScheme="dark">
                            S'inscrire
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="bg-white pt-20 pb-20 px-32 sm:px-10">
                <div className="flex justify-between gap-x-10 sm:gap-y-10 flex-wrap">
                    <FooterGroup />
                    <FooterGroup />
                    <FooterGroup />
                    <FooterGroup />
                </div>
            </div>

            <div className="h-10 bg-gray-100 text-xs flex justify-between items-center px-12 sm:px-4 text-gray-600">
                <div className="">Copyright©2023</div>
                <div>Created by Kouassi Kodossou</div>
            </div>
        </div>
    );
};

export default page;

"use client";
import Link from "next/link";
import React from "react";

type AuthLayoutProps = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="bg-yellow-300 h-full min-h-screen pb-20">
            <div className="sm:mb-4">
                <div className="pl-10 py-3 sm:pl-6">
                    <Link
                        href="/"
                        className="text-3xl sm:text-2xl font-bold text-black"
                    >
                        Reborn
                    </Link>
                </div>
            </div>

            <div className="w-[450px] p-8 rounded-lg sm:w-full sm:px-6 mx-auto bg-white">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;

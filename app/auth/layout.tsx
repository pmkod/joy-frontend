"use client";
import Footer from "@/ui/custom/Footer/Footer";
import Link from "next/link";
import React from "react";

type AuthLayoutProps = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="">
            <div className="min-h-screen">
                <div className="h-16 flex items-center">
                    <div className="pl-10 sm:pl-5">
                        <Link
                            href="/"
                            className="text-3xl sm:text-2xl font-bold text-black"
                        >
                            Reborn
                        </Link>
                    </div>
                </div>

                <div className="w-[450px] mt-4 rounded-lg sm:w-full sm:px-5 mx-auto">
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AuthLayout;

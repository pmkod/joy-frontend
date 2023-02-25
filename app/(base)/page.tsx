"use client";
import Footer from "@/ui/custom/Footer/Footer";
import FooterGroup from "@/ui/custom/FooterGroup/FooterGroup";
import Button from "@/ui/system/Button/Button";
import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";

const page = () => {
    return (
        <div className="">
            <div className="h-max bg-yellow-300 text-center flex flex-col items-center">
                <p className="mt-20 sm:mt-10 w-2/3 text-center text-7xl md:text-5xl sm:font-semibold sm:w-full sm:text-lg text-grey-800 font-semibold">
                    Bienvennue sur joy votre espace agreable
                </p>

                <div className="w-60 sm:w-52 flex flex-col items-center gap-y-4 mt-20 sm:mt-16">
                    <Link href="/auth/signup" className="w-full">
                        <Button size="lg" fullWidth colorScheme="dark">
                            S'inscrire
                        </Button>
                    </Link>
                    <Link href="/auth/login" className="w-full">
                        <Button
                            size="lg"
                            fullWidth
                            variant="outline"
                            colorScheme="dark"
                        >
                            Se connecter
                        </Button>
                    </Link>
                </div>

                <div className="mt-10 mb-4 invisible sm:visible flex items-center gap-x-4">
                    <div className="w-4 h-px bg-gray-700"></div>
                    <div className="text-sm">Ou</div>
                    <div className="w-4 h-px bg-gray-700"></div>
                </div>

                <div className="mb-16 invisible sm:visible">
                    <Link href="/download" className="w-full">
                        <Button
                            size="lg"
                            fullWidth
                            variant="plain"
                            colorScheme="dark"
                            leftIcon={<FiDownload />}
                        >
                            Télécharger l'application
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;

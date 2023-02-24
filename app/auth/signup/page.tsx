"use client";
import TermsAndPrivacyPolicyTextInfo from "@/ui/custom/TermsAndPrivacyPolicyTextInfo/TermsAndPrivacyPolicyTextInfo";
import AuthFormOptionsSeperator from "@/ui/system/AuthFormOptionsSeperator/AuthFormOptionsSeperator";
import AuthServiceButton from "@/ui/system/AuthServiceButton/AuthServiceButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignupPage = () => {
    const router = useRouter();
    const goToSignupPage = () => {
        router.push("/auth/signup/default");
    };

    return (
        <div className="">
            <div className="font-medium text-2xl mb-5">Inscrivez vous</div>
            <div className="">
                <AuthServiceButton
                    onClick={goToSignupPage}
                    text="Continuer avec votre mail"
                />

                <AuthFormOptionsSeperator>Ou</AuthFormOptionsSeperator>

                <div className="mb-5">
                    <AuthServiceButton
                        onClick={() => {}}
                        service="facebook"
                        text="Continuer avec facebook"
                    />
                </div>
                <div className="mb-2">
                    <AuthServiceButton
                        onClick={() => {}}
                        service="google"
                        text="Continuer avec google"
                    />
                </div>
                <div className="mt-5">
                    <TermsAndPrivacyPolicyTextInfo />
                </div>

                <div className="text-sm mt-6">
                    <p className="text-gray-600">Déja un compte ? &nbsp;</p>
                    <Link href="/auth/login" className="text-blue-500">
                        Connectez vous
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

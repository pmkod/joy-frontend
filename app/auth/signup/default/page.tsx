"use client";
import TermsAndPrivacyPolicyTextInfo from "@/ui/custom/TermsAndPrivacyPolicyTextInfo/TermsAndPrivacyPolicyTextInfo";
import Button from "@/ui/system/Button/Button";
import Input from "@/ui/system/Input/Input";
import Link from "next/link";
import React from "react";

import {
    SignupFormFields,
    signupFormSchema,
} from "@/utils/validators/signupFormSchema";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupDefaultPage = () => {
    const { control, handleSubmit } = useForm<SignupFormFields>({
        resolver: zodResolver(signupFormSchema),
        mode: "onSubmit",
    });
    const onSubmit: SubmitHandler<SignupFormFields> = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-2xl font-medium mb-1">Inscrivez vous</div>

            <div className="text-sm flex mb-5">
                <p className="text-gray-600">Déja un compte ? &nbsp;</p>
                <Link href="/auth/login" className="text-blue-500">
                    Connectez vous
                </Link>
            </div>

            <Controller
                name="fullName"
                control={control}
                // rules={}
                render={({ field, fieldState: { error } }) => (
                    <Input
                        type="text"
                        label="Nom complet"
                        errorMessage={error?.message}
                        // placeholder={}
                        {...field}
                    />
                )}
            />

            <Controller
                name="userName"
                control={control}
                // rules={}
                render={({ field, fieldState: { error } }) => (
                    <Input
                        type="text"
                        label="Nom d'utilisateur"
                        errorMessage={error?.message}
                        // placeholder={}
                        {...field}
                    />
                )}
            />

            <Controller
                name="email"
                control={control}
                // rules={}
                render={({ field, fieldState: { error } }) => (
                    <Input
                        type="email"
                        label="Email"
                        errorMessage={error?.message}
                        // placeholder={}
                        {...field}
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                // rules={}
                render={({ field, fieldState: { error } }) => (
                    <Input
                        type="password"
                        label="Mot de passe"
                        errorMessage={error?.message}
                        // placeholder={}
                        {...field}
                    />
                )}
            />

            <div className="">
                <TermsAndPrivacyPolicyTextInfo />
            </div>
            <div className="mt-2">
                <Button type="submit" fullWidth={true} rounded="md" size="md">
                    S'inscrire
                </Button>
            </div>
        </form>
    );
};

export default SignupDefaultPage;

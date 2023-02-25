"use client";
import AuthFormOptionsSeperator from "@/ui/system/AuthFormOptionsSeperator/AuthFormOptionsSeperator";
import AuthServiceButton from "@/ui/system/AuthServiceButton/AuthServiceButton";
import Button from "@/ui/system/Button/Button";
import Input from "@/ui/system/Input/Input";
import Link from "next/link";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    LoginFormFields,
    loginFormSchema,
} from "@/utils/validators/loginFormSchema";

const LoginPage = () => {
    const { control, handleSubmit } = useForm<LoginFormFields>({
        resolver: zodResolver(loginFormSchema),
        mode: "onSubmit",
    });
    const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
        console.log(data);
    };
    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1">
                    <div className="font-medium text-2xl">Connectez vous</div>
                </div>

                <div className="text-sm flex mb-5">
                    <p className="text-gray-600">Pas de compte ? &nbsp;</p>
                    <Link href="/auth/signup" className="text-blue-500">
                        Inscrivez vous
                    </Link>
                </div>
                <Controller
                    name="email"
                    control={control}
                    // rules={}
                    render={({ field, fieldState: { error } }) => (
                        <Input
                            type="email"
                            label="Email"
                            errorMessage={error?.message}
                            placeholder="xyz@mail.com"
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <Input
                            type="password"
                            label="Mot de passe"
                            placeholder="Au moins 12 caractères"
                            errorMessage={error?.message}
                            hasMarginBottom={false}
                            {...field}
                        />
                    )}
                />

                <div className="mb-2 mt-2 flex justify-end">
                    <Link
                        href="/auth/password/reset"
                        className="text-sm text-gray-800 hover:text-blue-500 border-b border-transparent hover:border-blue-500"
                    >
                        Mot de passe oublié
                    </Link>
                </div>
                <div className="mt-6">
                    <Button type="submit" rounded="md" fullWidth={true}>
                        Se connecter
                    </Button>
                </div>
            </form>

            <AuthFormOptionsSeperator>Ou</AuthFormOptionsSeperator>
            <div className="flex flex-col gap-4">
                <AuthServiceButton
                    onClick={() => {}}
                    service="facebook"
                    text="Continuez avec facebook"
                />
                <AuthServiceButton
                    onClick={() => {}}
                    service="google"
                    text="Continuez avec google"
                />
            </div>
        </div>
    );
};

export default LoginPage;

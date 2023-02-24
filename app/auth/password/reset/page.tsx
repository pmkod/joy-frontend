"use client";
import {useRouter} from "next/navigation"
import Alert from "@/ui/system/Alert/Alert";
import Button from "@/ui/system/Button/Button";
import Input from "@/ui/system/Input/Input";
import {
    PasswordResetFormFields,
    passwordResetFormSchema,
} from "@/utils/validators/passwordResetFormSchema";
import { nopeResolver } from "@hookform/resolvers/nope";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const PAsswordResetPage = () => {
    const { control, handleSubmit } = useForm<PasswordResetFormFields>({
        resolver: nopeResolver(passwordResetFormSchema),
        mode: "onChange",
    });
    const router = useRouter()
    const onSubmit: SubmitHandler<PasswordResetFormFields> = (data) => {
        router.push("/auth/verificaiton/otp")
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-2xl font-semibold mb-5">
                Renitializer votre mot de passe
            </div>

            <Controller
                name="email"
                control={control}
                // rules={}
                render={({ field, fieldState: { error } }) => (
                    <Input
                        label="Email"
                        placeholder=""
                        errorMessage={error?.message}
                        // placeholder={}
                        {...field}
                    />
                )}
            />

            <div className="mt-7 mb-8">
                <Button type="submit" fullWidth={true} rounded="md">
                    Continuer
                </Button>
            </div>

            <Alert status="info">Un code vous seras envoyé par mail</Alert>
        </form>
    );
};

export default PAsswordResetPage;

"use client";
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
    const onSubmit: SubmitHandler<PasswordResetFormFields> = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-3xl text-gray-800 font-semibold mb-6">
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

            <div className="mt-7">
                <Button type="submit" fullWidth={true} rounded="md">
                    Continuer
                </Button>
            </div>

            <div className="mt-8 text-sm text-gray-700">
                Un code vous seras envoyé par mail
            </div>
        </form>
    );
};

export default PAsswordResetPage;

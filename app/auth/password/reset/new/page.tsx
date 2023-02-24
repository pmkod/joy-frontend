"use client";
import Button from "@/ui/system/Button/Button";
import Input from "@/ui/system/Input/Input";
import {
    PasswordResetNewPasswordFormFields,
    passwordResetNewPasswordSchema,
} from "@/utils/validators/passwordResetNewPasswordFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const PasswordResetNewPasswordPage = () => {
    const { control, handleSubmit } =
        useForm<PasswordResetNewPasswordFormFields>({
            resolver: zodResolver(passwordResetNewPasswordSchema),
            mode: "onChange",
        });
    const onSubmit: SubmitHandler<PasswordResetNewPasswordFormFields> = (
        data
    ) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-3xl text-gray-800 font-semibold mb-6">
                Votre nouvau mot de passe
            </div>

            <Controller
                name="newPassword"
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <Input
                        type="password"
                        label="Nouveau mot de passe"
                        {...field}
                        placeholder="Votre nouveau mot de passe"
                        errorMessage={error?.message}
                    />
                )}
            />

            <Controller
                name="confirmNewPassword"
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <Input
                        type="password"
                        label="Confirmation du mot de passe"
                        {...field}
                        placeholder="Confirmer votre nouveau mot de passe"
                        errorMessage={error?.message}
                    />
                )}
            />

            <div className="mt-7">
                <Button type="submit" fullWidth={true} rounded="md">
                    Continuer
                </Button>
            </div>
        </form>
    );
};

export default PasswordResetNewPasswordPage;

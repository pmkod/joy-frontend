import Nope from "nope-validator";
import { passwordSchema } from "./shared_schemas";

export type PasswordResetNewPasswordFields = {
    newPassword: string;
    confirmNewPassword: string;
};

export const passwordResetNewPasswordSchema = Nope.object().shape({
    newPassword: passwordSchema.required(),
    confirmNewPassword: passwordSchema.required(),
});

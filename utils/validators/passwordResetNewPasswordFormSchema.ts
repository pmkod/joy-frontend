import { passwordSchema } from "./sharedSchemas";
import { z } from "zod";

export const passwordResetNewPasswordSchema = z.object({
    newPassword: passwordSchema,
    confirmNewPassword: passwordSchema,
});

export type PasswordResetNewPasswordFormFields = z.infer<
    typeof passwordResetNewPasswordSchema
>;

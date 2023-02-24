import { emailSchema, passwordSchema } from "./sharedSchemas";
import { z } from "zod";

export const passwordResetFormSchema = z.object({
    email: emailSchema,
});

export type PasswordResetFormFields = z.infer<typeof passwordResetFormSchema>;

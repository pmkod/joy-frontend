import { z } from "zod";
import { emailSchema, passwordSchema } from "./sharedSchemas";

export const loginFormSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export type LoginFormFields = z.infer<typeof loginFormSchema>;

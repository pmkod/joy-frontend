import { z } from "zod";
import {
    emailSchema,
    fullNameSchema,
    passwordSchema,
    userNameSchema,
} from "./sharedSchemas";

export const signupFormSchema = z.object({
    fullName: fullNameSchema,
    userName: userNameSchema,
    email: emailSchema,
    password: passwordSchema,
});

export type SignupFormFields = z.infer<typeof signupFormSchema>;

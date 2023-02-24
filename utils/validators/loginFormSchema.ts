import Nope from "nope-validator";
import { emailSchema, passwordSchema } from "./sharedSchemas";

export type LoginFormFields = {
    email: string;
    password: string;
};

export const loginFormSchema = Nope.object().shape({
    email: emailSchema.required(),
    password: passwordSchema.required(),
});

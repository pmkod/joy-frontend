import Nope from "nope-validator";
import {
    emailSchema,
    fullNameSchema,
    passwordSchema,
    userNameSchema,
} from "./shared_schemas";

export type SignupFormFields = {
    userName: string;
    fullName: string;
    email: string;
    password: string;
};

export const signupFormSchema = Nope.object().shape({
    fullName: fullNameSchema.required(),
    userName: userNameSchema.required(),
    email: emailSchema.required(),
    password: passwordSchema.required(),
});

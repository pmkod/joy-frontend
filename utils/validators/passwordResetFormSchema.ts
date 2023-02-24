import Nope from "nope-validator";
import { emailSchema, passwordSchema } from "./sharedSchemas";

export type PasswordResetFormFields = {
    email: string;
};

export const passwordResetFormSchema = Nope.object().shape({
    email: emailSchema.required(),
});

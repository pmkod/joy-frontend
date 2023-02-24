import Nope from "nope-validator";
import { emailSchema, passwordSchema } from "./shared_schemas";

export type PasswordResetFormFields = {
    email: string;
};

export const passwordResetFormSchema = Nope.object().shape({
    email: emailSchema.required(),
});

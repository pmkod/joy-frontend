import Nope from "nope-validator";

export const userNameSchema = Nope.string();
export const fullNameSchema = Nope.string();
export const emailSchema = Nope.string().email();
export const passwordSchema = Nope.string().min(12).max(50);

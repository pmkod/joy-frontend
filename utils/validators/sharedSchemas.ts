import { z } from "zod";

export const userNameSchema = z.string();
export const fullNameSchema = z.string();
export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(12).max(30);

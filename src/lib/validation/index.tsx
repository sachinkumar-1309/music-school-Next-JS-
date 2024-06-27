import * as z from "zod";

export const signUpValidationSchema = z.object({
	username: z.string().min(3, {
		message: "Username must be at least have 2 characters.",
	}),
	name: z.string().min(3, {
		message: "Name must be at least have 2 characters.",
	}),
	email: z.string().email(),
	password: z.string().min(8, {
		message: "Password must be at least of 8 characters.",
	}),
});
export const loginValidationSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, {
		message: "Password must be at least of 8 characters.",
	}),
});

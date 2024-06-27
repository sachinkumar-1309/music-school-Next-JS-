"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/Components/ui/buttonSHAD";
import axios from "axios";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/Components/ui/formSHAD";
import { Input } from "@/Components/ui/input";
import { signUpValidationSchema } from "@/lib/validation";
import Loader from "@/Components/shared/Loader";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ProfileForm() {
	const router = useRouter();
	const [isLoading, setisLoading] = useState<boolean>(false);
	// ...
	// 1. Define your form.
	const form = useForm<z.infer<typeof signUpValidationSchema>>({
		resolver: zodResolver(signUpValidationSchema),
		defaultValues: {
			username: "",
			name: "",
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof signUpValidationSchema>) {
		setisLoading(true);
		// create user
		try {
			const response = await axios.post("/api/users/signup", values);
			console.log("User registered successfully: " + response.data);
			router.push("/login");
			toast("User signed in succesfully");
			<Toaster />;
		} catch (error: any) {
			console.log(error.message);
		}
		console.log(values);
	}
	const BottomGradient = () => {
		return (
			<>
				<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
				<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
			</>
		);
	};
	return (
		<div className="border border-gray-600 m-36 mb-28  w-[85vw] xl:w-[40vw] md:w-[60vw] rounded-xl mx-auto sm:p-8 p-4">
			<h2 className="font-bold lg:text-3xl sm:text-2xl text-lg text-neutral-800 dark:text-neutral-200">
				Welcome to Music land
			</h2>
			<p className="text-neutral-600 text-sm max-w-sm mt-2 mb-2 dark:text-neutral-300">
				Login to music land if you can because we don&apos;t have a login flow
				yet
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-full">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input type="text" className="shad-input" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input type="text" className="shad-input" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" className="shad-input" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type="password" className="shad-input" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit">
						{isLoading ? (
							<div className="flex justify-center w-full items-center">
								<Loader />
								Loading...
								<BottomGradient />
							</div>
						) : (
							<div>
								Sign up &rarr;
								<BottomGradient />
							</div>
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
}

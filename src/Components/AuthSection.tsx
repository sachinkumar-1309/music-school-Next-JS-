"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout as authLogout } from "../store/authSlice";
import { capitalizeName } from "@/lib/utils";

export default function AuthSection() {
	const router = useRouter();
	const dispatch = useDispatch();
	const Login = useSelector((state: any) => state.auth.status);
	const userData = useSelector((state: any) => state.auth.userdata);
	// console.log(userData);

	const logout = async () => {
		try {
			await axios.get("api/users/logout");

			dispatch(authLogout());
			console.log("logged out");
			router.push("/login");
			toast.success(`Hey ${capitalizeName(userData.name)} you, Logged out`, {
				position: "bottom-right",
			});
		} catch (error: any) {
			console.log(error.message);
			toast("Logout failed");
		}
	};

	const login = () => {
		router.push("/login");
	};

	return (
		<div className="sm:w-[48px] w-[45px] rounded-full flex flex-col justify-center items-center top-12 max-[920px]:top-32 sm:top bg-black fixed sm:p-2 p-1 sm:right-4 right-2 z-50 border border-gray-700 space-y-2">
			{Login ? (
				<button
					className="w-full flex justify-center relative group"
					onClick={logout}>
					<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-light bg-gray-600/70 text-white px-2 py-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-gray-600/70">
						Logout
					</div>
					<Image
						src="/icons/logout.svg"
						alt="Logout"
						width={32}
						height={32}
						className="cursor-pointer m-2"
					/>
				</button>
			) : (
				<>
					<button
						className="w-full flex justify-center relative group"
						onClick={login}>
						<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-light bg-gray-600/70 text-white px-2 py-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-gray-600/70">
							Login
						</div>
						<Image
							src="/icons/login.svg"
							alt="Login"
							width={22}
							height={22}
							className="cursor-pointer m-2"
						/>
					</button>
					<button
						className="w-full flex justify-center relative group"
						onClick={() => router.push("/signup")}>
						<div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-light bg-gray-600/70 text-white px-2 py-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-gray-600/70">
							Sign&nbsp;up
						</div>
						<Image
							src="/icons/signup.svg"
							alt="Login"
							width={22}
							height={22}
							className="cursor-pointer m-2"
						/>
					</button>
				</>
			)}
			<Toaster containerClassName="z-[51]" />
		</div>
	);
}

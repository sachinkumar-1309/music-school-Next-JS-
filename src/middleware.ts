// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
// 	const path = request.nextUrl.pathname;

// 	const isPublicPath =
// 		path === "/login" || path === "/signup" || path === "/verifyemail";

// 	const token = request.cookies.get("token")?.value || "";

// 	if (isPublicPath && token) {
// 		return NextResponse.redirect(new URL("/", request.nextUrl));
// 	}

// 	if (!isPublicPath && !token) {
// 		return NextResponse.redirect(new URL("/login", request.nextUrl));
// 	}
// }

// // See "Matching Paths" below to learn more
// export const config = {
// 	matcher: ["/", "/profile", "/login", "/signup", "/verifyemail"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	console.log("Path: " + path);

	const isPublicPath =
		path === "/login" || path === "/signup" || path === "/verifyemail";
	console.log("Is public path: " + isPublicPath);

	const token = request.cookies.get("token")?.value || "";

	if (isPublicPath && token) {
		return NextResponse.redirect(new URL("/", request.nextUrl));
	}
	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}
}
export const config = {
	matcher: [
		"/",
		"/login",
		"/profile",
		"/courses",
		"/events",
		"/aboutus",
		"/signup",
		// "/",
		// "/",
	],
};

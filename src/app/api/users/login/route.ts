import { connect } from "@/dbConnect/dbConnect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connect();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { email, password } = reqBody;
		const user = await User.findOne({ email });
		if (!user)
			return NextResponse.json(
				{ message: "User not found in login page" },
				{ status: 404 }
			);
		console.log("User Logged IN");
		const isPasswordMatch = await bcryptjs.compare(password, user.password);
		if (!isPasswordMatch)
			return NextResponse.json(
				{ message: "Password is incorrect" },
				{ status: 404 }
			);
		const tokenData = {
			id: user._id,
			username: user.username,
			email: user.email,
		};
		console.log("Token data: "+tokenData)
		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: "1d",
		});
		const response = NextResponse.json({
			message: "Logged in successfully",
			success: true,
			data: user,
		});
		response.cookies.set("token", token, { httpOnly: true });
		return response;
	} catch (error: any) {
		throw NextResponse.json({ error: error.message }, { status: 500 });
	}
}

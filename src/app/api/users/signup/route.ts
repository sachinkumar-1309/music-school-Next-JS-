import { connect } from "@/dbConnect/dbConnect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		console.log("Body: " + JSON.stringify(reqBody));
		const { username, name, email, password } = reqBody;

		const user = await User.findOne({ email });
		if (user) {
			throw NextResponse.json({
				message: "User already exists",
				status: true,
			});
		}
		console.log("User not found in signup page");

		const hashedPassword = await bcryptjs.hash(password, 10);
		console.log("Hashed password: " + hashedPassword);
		const newUser = new User({
			username,
			name,
			email,
			password: hashedPassword,
		});
		console.log("New user: " + newUser);

		const savedUser = await newUser.save();

		//TODO:Email verification
		console.log("Saved user: " + savedUser);

		return NextResponse.json({
			message: "User registered successfully",
			success: true,
			savedUser,
		});
	} catch (error: any) {
		throw NextResponse.json({ error: error.message }, { status: 500 });
	}
}

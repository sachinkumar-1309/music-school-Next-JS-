import { connect } from "@/dbConnect/dbConnect";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(_request: NextRequest) {
	try {
		const response = NextResponse.json({
			message: "Logged out successfully",
			success: true,
		});
		response.cookies.set("token", "", {
			httpOnly: true,
			expires: new Date(0),
		});
		return response;
	} catch (error: any) {
		throw NextResponse.json({ error: error.message }, { status: 500 });
	}
}

import mongoose from "mongoose";
export async function connect() {
	try {
		mongoose.connect(process.env.MONGODB_URL!);
		const connection = mongoose.connection;
		connection.on("connected", () => {
			console.log("MongoDB connected successfully");
		});
		connection.on("error", (err) => {
			console.log("MongoDB connection failed !: " + err);
			process.exit();
		});
	} catch (error: any) {
		console.log("Something went wrong in connecting to DB" + error);
		// toast(error.message);
	}
}

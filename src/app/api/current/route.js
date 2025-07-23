import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { user as UserModel } from "@/models/user";
import { connectDb } from "@/helper/db";

export async function GET(request) {
    await connectDb();

    try {
        const authToken = request.cookies.get("authToken")?.value;
        const data = jwt.verify(authToken, process.env.JWT_KEY);
        const currentUser = await UserModel.findById(data._id).select("-password");
        return NextResponse.json(currentUser);
    } catch (error) {
        return NextResponse.json({ message: "User not logged in" }, { status: 401 });
    }
}

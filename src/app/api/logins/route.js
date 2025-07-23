import { NextResponse } from "next/server"
import { user } from "@/models/user"
import { connectDb } from "@/helper/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
// import Error from "next/error";
export async function POST(request) {
    const { email, password } = await request.json()
    connectDb()

    try {
        //1
        const User = await user.findOne({
            email: email
        });

        if (User == null) {
            throw new Error("user not found")
        }
        //2
        // console.log(User);
        const matched = bcrypt.compareSync(password, User.password);
        if (!matched) {
            throw new Error("password not matched")
        }
        // 3.generate token

        const token = jwt.sign({
            _id: User._id,
            name: User.name
        }, process.env.JWT_KEY)

        const response = NextResponse.json({
            message: "login success!!",
            success: true
        })
        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: true,
        })


        console.log(User)
        console.log(token)
        return response

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error.message,
            success: false
        },
            {
                status: 500

            })
    }
}
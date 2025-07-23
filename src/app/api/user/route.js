import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { user } from "@/models/user";
import bcrypt from "bcryptjs"
connectDb()

export async function GET(request) {
    let oneusers = []

    try {
        oneusers = await user.find()
        return NextResponse.json(oneusers)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "failed to get user",
                success: false
            },
        )

    }
    // return NextResponse.json(oneusers)


}

//creat user
export async function POST(request) {
    // fetch user detail from request


    const { name, email, password, about, profileURL } = await request.json()

    // create user object with user models

    const hammaduser = new user({
        name,
        email,
        password,
        about,
        profileURL,
    });
    try {
        hammaduser.password = bcrypt.hashSync(hammaduser.password, parseInt(process.env.BCRYPT_SALT))
        console.log(hammaduser)
        const createduser = await hammaduser.save()

        const response = NextResponse.json(hammaduser, {
            status: 201,

        })
        return response;


    } catch (error) {
        console.log(error)


        return NextResponse.json({
            message: 'faild to creat user !!',
            status: false
        });

    }
    // const jsondata = await request.json()
    // console.log(jsondata)
    //     const textdata = await request.text()
    //     console.log(textdata)
    //     // const body = request.body
    //     // console.log(body)
    //     // console.log(request.method)
    //     // console.log(request.cookies)
    //     // console.log(request.headers)
    //     // console.log(request.nextUrl.pathname)
    //     // console.log(request.nextUrl.searchParams)
    //     return NextResponse.json({
    //         message: "User created successfully",
    //     })
}

export function PUT() { }

export function DELETE(request) {
    console.log('delete api called')


    return NextResponse.json(
        {
            message: 'delete it',
            status: true,
        },
        {
            status: 201,
            statusText: 'Created',
        }
    )
}
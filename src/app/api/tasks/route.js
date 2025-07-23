import { NextResponse } from 'next/server';
import { Task } from '@/models/tasks';
import { connectDb } from "@/helper/db";
import { forerror } from '@/helper/errormassage';
import jwt from "jsonwebtoken";

connectDb()
export async function POST(request) {

    const { title, content, userid, } = await request.json()
    //fetching loggedin user id
    const authToken = request.cookies.get("authToken")?.value;
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data._id)
    try {
        const task = new Task({
            title,
            content,
            userid: data._id
        })
        const createdtask = await task.save()
        return NextResponse.json(createdtask, {
            status: 201
        })

    } catch (error) {
        return NextResponse.json({
            message: 'Failde to create Task',
            success: false, status: 200
        })

    }
}


export async function GET(request) {
    try {
        const tasks = await Task.find()
        return NextResponse.json(tasks)

    } catch (error) {
        return forerror('error araha hya', 404, false)

    }

}
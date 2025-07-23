import { Task } from "@/models/tasks";
import { connectDb } from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";
import { forbidden } from "next/navigation";
import { forerror } from "@/helper/errormassage";
connectDb()
export async function GET(request, { params }) {
  const { tasksId } = params;

  try {
    const task = await Task.findById(tasksId);
    return NextResponse.json(task)
  }

  catch (error) {
    console.log(error)
    return forerror('error hay', 404, false)

  }
}

export async function PUT(request, { params }) {
  try {
    const { tasksId } = params;
    const { title, content, status } = await request.json()

    const task = await Task.findById(tasksId)

    task.title = title
    task.content = content
    task.status = status
    const updatetask = await task.save()
    return NextResponse.json(updatetask)

  } catch (error) {
    console.log(error)
    return forerror('error hay', 404, false)

  }

}



export async function DELETE(request, { params }) {
  try {
    const { tasksId } = params;



  } catch (error) {

  }
}
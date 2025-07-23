"use client"
import { addTask } from "@/Services/taskService";
import { toast } from 'react-toastify';
import { ClientPageRoot } from "next/dist/client/components/client-page";
import React, { useState } from "react";
import jwt from "jsonwebtoken"
// export const metadata = {
//     title: "add task"
// };

const Addtask = () => {
    // document.title = metadata.title

    const [task, setTask] = useState({
        title: "",
        content: "",
        status: 'none',
        userid: '686656261eb38efe97f352c5'

    })
    const handleAddTask = async (event) => {
        event.preventDefault();

        console.log("Form data:", task);

        try {
            const result = await addTask(task)
            console.log("API Result:", result);

            toast.success("task is added!!", {
                position: "top-center"
            });

            setTask({
                title: "",
                content: "",
                status: 'none',
                userid: '686656261eb38efe97f352c5'
            });

        } catch (error) {
            console.log("Error in addTask:", error);
            console.log("Error response:", error?.response?.data);

            toast.error("task is not added!!", {
                position: "top-center"
            });
        }
    }

    // console.log('this is component')
    return (

        <div className="grid-cols-12 justify-center">
            <div className=" col-span-4 col-start-5 mt-4 p-5 shadow-gray-900 shadow-sm">
                <h1 className="text-3xl">
                    Add task here!
                </h1>
                <form action="#!" onSubmit={handleAddTask}>
                    {/* task title */}
                    <div className="mt-4">
                        <label htmlFor="task _title" className="block text-sm font-medium mb-2">title</label>
                        <input type="text" className="w-full p-2.5 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="task_title" name="task_title"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    title: event.target.value,

                                })
                            }}
                            value={task.title} />

                    </div>
                    {/* task content */}
                    <div className="mt-4 ">
                        <label htmlFor="task _content" className="block text-sm font-medium mb-2">content</label>
                        <textarea className="w-full p-2.5 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="task_content " rows={5} name="task_content"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    content: event.target.value,

                                })
                            }}
                            value={task.content} />
                    </div>
                    {/* task status */}
                    <div className="mt-4">
                        <label htmlFor="task_status" className="block">Status</label>
                        <select name="task_status" id="task_status" className="w-full p-2.5 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    status: event.target.value,

                                })
                            }} value={task.status}>
                            <option value="none" disabled  >---Select Status---</option>
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>

                        </select>
                    </div>
                    <div className=" mt-4 flex justify-center">
                        <button type="submit" className="bg-blue-600 py-2 px3 rounded-lg hover:bg-blue-800">Add Task</button>
                        <button className="bg-red-600 py-2 px3 rounded-lg hover:bg-red-800 ms-3">Clear</button>
                    </div>
                    {JSON.stringify(task)}
                </form>


            </div>
        </div>
    )
}
export default Addtask;
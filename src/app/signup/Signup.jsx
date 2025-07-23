"use client"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { signUp } from "@/Services/userService";
import { forerror } from "@/helper/errormassage";

export default function SignUpForm() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
    })
    const doSignUp = async (event) => {
        event.preventDefault()
        console.log(event)
        console.log(data)
        if (data.name.trim() == "" || data.name == null) {
            toast.warning("name is required");

            return;
        }
        try {
            const result = signUp(data)
            console.log(result)
            toast.success("user is registered", {
                position: "top-center"
            },
                setData({
                    name: "",
                    email: "",
                    password: "",
                    about: "",
                    profileURL: "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
                }))
        } catch (error) {
            console.log(error)
            return forerror('not working', 404, false)

        }
    }
    const resetButton = () => {
        setData({
            name: "",
            email: "",
            password: "",
            about: "",
            profileURL: "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
        })
    }
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>

                <form className="bg-gray-50 shadow-md rounded-xl p-8 space-y-6" onSubmit={doSignUp}>
                    {/* Username */}
                    <div>
                        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            id="user_name"
                            name="user_name"
                            type="text"
                            placeholder="Enter username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                            required
                            onChange={event => {
                                setData({
                                    ...data,
                                    name: event.target.value
                                })

                            }}
                            value={data.name}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="user_email"
                            name="user_email"
                            type="text"
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            onChange={event => {
                                setData({
                                    ...data,
                                    email: event.target.value
                                })

                            }}
                            value={data.email}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="user_password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="user_password"
                            name="user_password"
                            type="password"
                            placeholder="Enter password"
                            className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            onChange={event => {
                                setData({
                                    ...data,
                                    password: event.target.value
                                })

                            }}
                            value={data.password}
                        />
                    </div>

                    {/* About */}
                    <div>
                        <label htmlFor="user_about" className="block text-sm font-medium text-gray-700 mb-1">
                            About
                        </label>
                        <textarea
                            id="user_about"
                            name="user_about"
                            rows="4"
                            placeholder="Tell us something about yourself..."
                            className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"

                            onChange={event => {
                                setData({
                                    ...data,
                                    about: event.target.value
                                })

                            }}
                            value={data.about}
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between gap-4">

                        <button type="submit" className="w-full bg-indigo-600 text-black font-semibold px-6 py-3 rounded-lg hover:bg-indigo-500 transition duration-300"
                        >
                            Sign Up
                        </button>

                        <button onClick={resetButton} type="reset"
                            className="w-full bg-red-600 text-black font-semibold px-6 py-3 rounded-lg hover:bg-red-500 transition duration-300"
                        >
                            Reset
                        </button>

                    </div>
                    {JSON.stringify(data)}
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </section>
    );
}

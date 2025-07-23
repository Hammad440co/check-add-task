"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useState } from 'react';
import { login } from "@/Services/userService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

export default function Login() {
    const router = useRouter()
    const context = useContext(UserContext)
    const [logindata, setLoginData] = useState({
        email: "",
        password: ""
    });

    const loginFormSubmitted = async (event) => {
        event.preventDefault();
        if (logindata.email.trim() === "") {
            toast.info('Email is required', {
                position: "top-center"
            });
            return;
        }

        toast.success('Login successful!', {
            position: "top-center"
        });


        try {
            const result = await login(logindata)
            console.log(result)
            toast.success("Logged in")
            context.setUser(result.user)

            router.push("/profile/user")
        } catch (error) {
            console.log(error)
            toast.error(
                "error in login"
                , {
                    position: "top-center"
                }
            )
        }
    };

    return (
        <>
            <section className="w-full bg-white py-16 px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>

                    <form className="bg-gray-50 shadow-md rounded-xl p-8 space-y-6" onSubmit={loginFormSubmitted}>
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
                                onChange={event => setLoginData({ ...logindata, email: event.target.value })}
                                value={logindata.email}
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
                                onChange={event => setLoginData({ ...logindata, password: event.target.value })}
                                value={logindata.password}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between gap-4">
                            <button type="submit" className="w-full bg-indigo-600 text-black font-semibold px-6 py-3 rounded-lg hover:bg-indigo-500 transition duration-300">
                                Login
                            </button>
                            <button type="reset" className="w-full bg-red-600 text-black font-semibold px-6 py-3 rounded-lg hover:bg-red-500 transition duration-300">
                                Reset
                            </button>
                        </div>

                        {/* Debugging Display */}
                        <pre className="text-xs text-gray-500">{JSON.stringify(logindata, null, 2)}</pre>
                    </form>
                </div>
            </section>

            {/* Toast container added here */}
            <ToastContainer />
        </>
    );
}

"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserContext from "../context/userContext";
import { logout } from "@/Services/userService";
import { NextResponse } from "next/server";
// import { useRouter } from "next/router";

const CustomNavbar = () => {
    const { user, setUser } = useContext(UserContext);
    const router = useRouter()
    async function doLogout() {
        try {
            const result = await logout()
            console.log(result)
            setUser(undefined)
        } catch (error) {
            console.log(error)
            NextResponse.json({
                message: "not woeking",
                status: false
            })

        }
    }

    return (
        <div className="flex justify-between items-center bg-amber-400 py-3 px-2">
            <div className="font-bold text-lg">WorkManager</div>

            <div>
                <ul className="flex items-center space-x-4">
                    {user && (
                        <>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/add-task">Add Task</Link></li>
                            <li><Link href="/show-task">Show Task</Link></li>
                        </>
                    )}
                </ul>
            </div>

            <div>
                <ul className="flex items-center space-x-4">
                    {!user ? (
                        <>
                            <li><Link href="/signup">SignUp</Link></li>
                            <li><Link href="/login">Login</Link></li>
                        </>
                    ) : (
                        <>
                            <li>{user.name}</li>
                            <li>
                                <button onClick={doLogout}>Logout</button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CustomNavbar;

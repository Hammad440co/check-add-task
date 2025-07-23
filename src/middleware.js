import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request) {
    console.log("middle executed");

    const authToken = request.cookies.get("authToken")?.value;

    const loggedInUserNotAccessPath =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname === "/signup";

    if (loggedInUserNotAccessPath) {
        if (authToken) {
            return NextResponse.redirect(new URL("/about", request.url));
        }

        if (!authToken) {
            if (request.nextUrl.pathname.startsWith("/api")) {
                return new NextResponse(
                    JSON.stringify({
                        message: "Access denied",
                        success: false,
                    }),
                    {
                        status: 401,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
            }

            return NextResponse.next(); // ✅ just allow /login or /signup if no token
        }
    }

    return NextResponse.next(); // ✅ allow all other cases
}

export const config = {
    matcher: ["/", "/login", "/signup", "/add-task", "/show-task"],
};

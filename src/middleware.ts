import { NextResponse } from "next/server";

export default function middleware() {
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico).*)" // Exclude static files and assets
    ],
};

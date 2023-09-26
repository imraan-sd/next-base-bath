import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const response = NextResponse.next();
    return response;
  } catch (err) {
    console.log(err);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    `/((?!api|_next/static|_next/image|favicon.ico).*)`,
  ],
};

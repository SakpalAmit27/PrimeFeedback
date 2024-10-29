import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
// NextRequest is a subclass of Request that adds several properties and methods. It's used in middleware
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.SECRET });
  // console.log(token?.name?.trim().split(" ")[0]);
  // console.log(request.url);
  // console.log(request.url.endsWith("/dashboard"));
  if (
    token &&
    (request.url.endsWith("/sign-up") ||
      request.url.endsWith("/sign-in") ||
      request.url.endsWith("/verify") ||
      request.url.endsWith("/"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && request.url.endsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  //   return NextResponse.redirect(new URL("/home" , request.url));
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: "/about/:path*",
  matcher: ["/sign-up", "/sign-in", "/", "/dashboard/:path*", "/verify/:path*"],
};
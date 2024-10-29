import { NextRequest,NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more

// this config is like a file it will run the middlware were we mention it inside path 
export const config = {
    matcher:[
        '/sign-in',
        'sign-up',
        '/',
        '/dashboard/:path*',
        '/verify/:path*'
    ]
}
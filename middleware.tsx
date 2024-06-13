"use server"
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const cookies = request.cookies.get('bb_mb_string')
    if(!cookies){

        return NextResponse.redirect(new URL('/', request.url));
    }
    
    // Continue processing the request if the token exists
    return NextResponse.next();

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/cart',
}
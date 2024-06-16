"use server"
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  
  const cookies = request.cookies.get('bb_mb_string')
  
  if (request.nextUrl.pathname === '/login' && cookies) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname === '/cart' && !cookies) {
      return NextResponse.redirect(new URL('/', request.url));
  }
    
  return NextResponse.next();

}
 
export const config = {
  matcher: ['/cart','/login'],
}
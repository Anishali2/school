import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  const { pathname } = request.nextUrl
  if (!token && pathname.includes('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url))
  }
  if (token && pathname.includes('/auth')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

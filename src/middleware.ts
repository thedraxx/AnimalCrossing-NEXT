import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose';

export async function middleware(request: NextRequest ) {

  const token = request.cookies.get('token')?.value || '';

  try {
      await jose.jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_SEED));
      return NextResponse.next();

    }catch (error) {

      return NextResponse.redirect(new URL('/', request.url))

    }

}

export const config = {
  matcher: '/home',
}
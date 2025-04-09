import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const secret = process.env.JWT_SECRET as string;

  if (token) {
    try {
      const decodedToken = jwt.verify(token, secret);
      if (!decodedToken) {
        throw new Error('Invalid token');
      }

      const response = NextResponse.next();
      response.headers.set('x-user-token', token);
      return response;
    } catch (error) {
      console.error('JWT Verification Error:', error);
      // return NextResponse.redirect(new URL('/signin', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected-route/*'],
};

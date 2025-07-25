import { VerifyToken } from "./utility/JWTTokenHelper";
import { NextResponse } from "next/server";



export async function middleware(req,res) {
    try {
        let token = req.cookies.get('token');
        let payload = await VerifyToken(token['value'])
        const requestHeader = new Headers(req.headers);
        requestHeader.set('email', payload['email']);
        requestHeader.set('id', payload['id']);

        return NextResponse.next({request: { headers: requestHeader }})
    } catch (error) {
        if(req.nextUrl.pathname.startsWith('/api/')){
            return NextResponse.json({ status: 'fail', data: 'Unauthorized'},{status:401});
        }else {
            return NextResponse.redirect(new URL('/user/login', req.url))
        }
    }
}

export const config = {
    matcher: [
        '/api/profile/details',
        '/api/profile/update',
        '/api/profile/delete',
        '/api/donationHistory',
        '/api/profile',
        '/dashboard/:path*'
    ]
}
import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { CreateToken } from "@/utility/JWTTokenHelper";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;

        const prisma = new PrismaClient();
        const result = await prisma.donor.findUnique({
            where: { email }
        });

        if (!result || !bcrypt.compareSync(password, result.password)) {
            return NextResponse.json({ status: "fail", message: "Invalid credentials" }, { status: 401 });
        } else {
            let token = await CreateToken(result.email, result.id);
            let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
            const cookieString = `token=${token}; expires=${expireDuration.toUTCString()}; path=/`;
            return NextResponse.json(
                { status: "success", data: token },
                { status: 200, headers: { 'set-cookie': cookieString } }
            );
        }
    } catch (error) {
        return NextResponse.json({ status: "fail", message: error.message });
    }
}


export async function GET(req,res) {
    let expireDuration = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const response = NextResponse.redirect(new URL('/', req.url),303);
    response.cookies.set('token', '', {expires: expireDuration});
    return response;
}
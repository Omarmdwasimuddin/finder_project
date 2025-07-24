import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; 

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        reqBody.otp = "0";

        if (reqBody.password) {
            reqBody.password = bcrypt.hashSync(reqBody.password, 10);
        }

        const prisma = new PrismaClient();
        const result = await prisma.donor.create({
            data: reqBody
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (error) {
        return NextResponse.json({ status: "fail", message: error.message });
    }
}
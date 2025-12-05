import { PrismaClient } from "@/generated/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";



export async function POST(req,res) {
    try {

        let headerList = await headers();
        let id = parseInt(headerList.get('id'));

        let reqBody = await req.json();

        if (reqBody.password) {
                    reqBody.password = bcrypt.hashSync(reqBody.password, 10);
                }

        const prisma = new PrismaClient();
        const result = await prisma.donor.update({
            where:{id:id},
            data:reqBody
        })
        return NextResponse.json({status:'success', data:result})
    } catch (error) {
        return NextResponse.json({status:'fail', data:error.message})
    }
}
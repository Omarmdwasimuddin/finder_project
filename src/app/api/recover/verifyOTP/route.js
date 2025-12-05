import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";




export async function POST(req,res) {
    try {
        let reqBody = await req.json();
        const prisma = new PrismaClient();
        const count = await prisma.donor.count({
            where:reqBody
        });
        if(count===1){
            return NextResponse.json({status:"success", data:"Valid OTP code"})
        }else{
            return NextResponse.json({status:"fail", data:"Invalid OTP code!"})
        }
    } catch (error) {
        return NextResponse.json({status:"fail", data:error.message})
    }
}
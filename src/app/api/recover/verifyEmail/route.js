import { PrismaClient } from "@/generated/prisma";
import { SendEmail } from "@/utility/EmailUtility";
import { NextResponse } from "next/server";




export async function GET(req,res) {
    try {
        let {searchParams}=new URL(req.url);
        let email=searchParams.get('email');

        const prisma = new PrismaClient();
        const count = await prisma.donor.count({
            where:{email:email}
        });
        if(count===1){
            let code = Math.floor(100000+Math.random()*900000);
            let EmailText=`Your OTP code is ${code}`
            let EmailSubject="Finder verification code";
            await SendEmail(email,EmailText,EmailSubject);

            let result = await prisma.donor.update({
                where:{email:email},
                data:{otp:code.toString()}
            })
            return NextResponse.json({status:'success',data:'6 Digit OTP code has been sent to your email'})
        }else{
            return NextResponse.json({status:'fail', data:'No user found'})
        }
    } catch (error) {
        return NextResponse.json({status:'fail', data:error.message})
    }
}
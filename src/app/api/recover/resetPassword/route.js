import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; //bcrypt import

export async function POST(req) {
  try {
    let reqBody = await req.json();

    const prisma = new PrismaClient();
    const count = await prisma.donor.count({
      where: {
        email: reqBody['email'],
        otp: reqBody['otp']
      }
    });

    if (count === 1) {
      const hashedPassword = await bcrypt.hash(reqBody['password'], 10); // Hashing done here

      await prisma.donor.update({
        where: { email: reqBody['email'] },
        data: {
          otp: '0',
          password: hashedPassword //Store hashed password
        }
      });

      return NextResponse.json({ status: 'success', data: "Password Reset Success" });
    } else {
      return NextResponse.json({ status: 'fail', data: "Password Reset Fail" });
    }

  } catch (error) {
    return NextResponse.json({ status: 'fail', data: error.message });
  }
}

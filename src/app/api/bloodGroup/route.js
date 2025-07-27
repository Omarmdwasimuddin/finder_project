import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient(); 

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const bloodGroup = searchParams.get("bloodGroup");

    console.log("Query BloodGroup =>", bloodGroup);

    const result = await prisma.donor.findMany({
      where: {
        bloodGroup: {
          contains: bloodGroup, // or use 'equals' if you want exact match
          mode: "insensitive", // optional: case insensitive
        },
      },
      select: {
        name: true,
        phone: true,
        bloodGroup: true,
        district: true,
        upazila: true,
        city: true,
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

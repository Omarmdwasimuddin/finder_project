import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { PrismaClient } from "@/generated/prisma"; 

export async function GET(req) {
  try {
    const headerList = await headers();
    const id = parseInt(headerList.get("id"));

    if (!id || isNaN(id)) {
      return NextResponse.json({ status: "fail", message: "Unauthorized" }, { status: 401 });
    }
    const prisma = new PrismaClient()
    const donor = await prisma.donor.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        phone: true,
        bloodGroup: true,
        district: true,
        upazila: true,
        city: true,
        email: true,
        createdAt: true,
      },
    });

    if (!donor) {
      return NextResponse.json({ status: "fail", message: "Donor not found" }, { status: 404 });
    }

    return NextResponse.json({ status: "success", data: donor });
  } catch (error) {
    return NextResponse.json({ status: "fail", message: error.message }, { status: 500 });
  }
}

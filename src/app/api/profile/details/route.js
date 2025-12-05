import { PrismaClient } from "@/generated/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const headerList =await headers();
    const id = parseInt(headerList.get('id'));

    console.log(id);

    const prisma = new PrismaClient();
    const result = await prisma.donor.findUnique({
      where: { id: id }
    });

    return NextResponse.json({ status: "success", data: result });

  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

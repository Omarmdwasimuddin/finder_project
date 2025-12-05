import { PrismaClient } from "@/generated/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const headerList = await headers();
    const headerId = parseInt(headerList.get("id")); 
    const reqBody = await req.json(); 

    const prisma = new PrismaClient();

    const result = await prisma.donor.deleteMany({
      where: {
        AND: [
          { id: headerId },
          { id: parseInt(reqBody["id"]) },
        ],
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

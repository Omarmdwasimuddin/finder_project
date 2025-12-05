import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

export async function GET() {

 const prisma = new PrismaClient();
  const donors = await prisma.donor.findMany({
    where: { isActive: true },
    select: {
      id: true,
      name: true,
      bloodGroup: true,
      phone: true,
      latitude: true,
      longitude: true,
    },
  });

  return NextResponse.json(donors);
}
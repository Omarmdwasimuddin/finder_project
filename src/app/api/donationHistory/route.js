import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import {headers} from "next/headers";

export async function POST(req) {
  try {
    let headerList = headers();
    const donorId = parseInt(headerList.get("id"));


    const body = await req.json();
    const { patientName, hospitalName, donationDate, note } = body;

    const prisma = new PrismaClient();
    const donation = await prisma.donationHistory.create({
      data: {
        patientName,
        hospitalName,
        donationDate: new Date(donationDate),
        note,
        donor: {
          connect: { id: donorId }
        }
      },
    });

    return NextResponse.json({ status: "success", data: donation });
  } catch (error) {
    console.error("Donation Error:", error);
    return NextResponse.json({ status: "fail", message: error.message }, { status: 500 });
  }
}

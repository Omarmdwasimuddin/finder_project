import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import {headers} from "next/headers";

export async function POST(req) {
  try {
    let headerList = await headers();
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




export async function GET(req) {
  try {
    const headerList = await headers();
    const donorId = parseInt(headerList.get("id"));

    if (!donorId) {
      return NextResponse.json({ status: "fail", message: "Unauthorized" },{ status: 401 });
    }
    const prisma = new PrismaClient();
    const result = await prisma.donationHistory.findMany({
      where: { donorId },
      select: {
        patientName: true,
        hospitalName: true,
        donationDate: true,
      }
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.error("Error fetching donation history:", error);
    return NextResponse.json(
      { status: "fail", message:"Something went wrong"},
      { status: 500 }
    );
  }
}
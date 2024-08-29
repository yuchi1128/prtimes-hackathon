import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()


export async function POST(request: NextRequest) {
  try {
    prisma.$connect
    const req = await request.json();

    const user = prisma.user.findUnique({
      where: {
        username: req.username
      }
    });

    if(!user) {
      return NextResponse.json(
        { message: "User Not Found." },
        { status: 500 },
      )
    }else if("pass" === req.password) {
      return NextResponse.json(
        { message: "Password Incorrect." },
        { status: 401 }
      )
    } else {
      return NextResponse.json(
        { message: "Login Successd" },
        { status: 200 }
      )
    }
  } finally {
    prisma.$disconnect
  }
}
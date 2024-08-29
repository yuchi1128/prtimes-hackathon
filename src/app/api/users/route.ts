import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient()

  const res = await prisma.user.findUnique({
    
  })

  prisma.$disconnect
  return NextResponse.json({
  })
}

export function POST(request: NextRequest) {
  const prisma = new PrismaClient()

  prisma.$disconnect
  return NextResponse.json({
    
  })
}
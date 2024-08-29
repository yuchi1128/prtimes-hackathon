import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
  const prisma = new PrismaClient()

  const userData = prisma.user.findMany(
    {}
  )

  prisma.$disconnect

  return NextResponse.json(
    { respose: userData }
  )
}

export async function POST(request: NextRequest){
  const prisma = new PrismaClient()
  const res = await prisma.user.create(
    {
      data: {
        uuid: "aaaaa-bbbbbb-ccccc-ddddd",
        password: "test",
        profile: {
          username: "test_user", 
          profileImageURL: "dummy",
          twitterURL: "dummy",
          facebookURL: "dummy",
          description: "this is dummy user."
        }
      }
    }
  )
  prisma.$disconnect

  return NextResponse.json({message: res})
}
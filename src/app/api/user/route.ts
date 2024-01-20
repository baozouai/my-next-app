import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import request from '@request'

const prisma = new PrismaClient()

interface UserRequest {
  userId: string
}
export async function POST(request: NextRequest){
  try {
    const { userId } = await request.json() as UserRequest
    if(!userId){
      return NextResponse.json({
        message: 'Bad Request'
      }, { status: 400 })
    }

    let user = await prisma.user.findUnique({
      where: {
        userId
      }
    })
    if(!user){
      user = await prisma.user.create({
        data: {
          userId: userId
        }
      })
    }
    console.log(user)
    return NextResponse.json(user)
  } catch (e){
    console.log(e)
    return NextResponse.json({
      message: 'Internal Server Error'
    }, { status: 500 })
  }
}
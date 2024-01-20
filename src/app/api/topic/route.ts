import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@prisma';

interface TopicRequest {
  userId: string
  avatar: string
  content: string
  images: string[]
  options: string[]
}
export async function POST(request: NextRequest){
  try {
    const { userId, avatar, content, images, options } = await request.json() as TopicRequest
    const topic = await prisma.topic.create({
      data: {
        userId,
        avatar,
        content,
        images,
        options: {
          create: options.map((option) => ({
            key: option,
            value: 0
          }))
        },
      },
      include: {
        options: true
      }
    })
    return NextResponse.json(topic)
  } catch (e){
    return NextResponse.json({
      message: 'Internal Server Error'
    }, { status: 500 })
  }
}
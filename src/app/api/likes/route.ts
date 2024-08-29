import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId, articleId } = await req.json();

  try {
    const like = await prisma.like.create({
      data: {
        userId: userId,
        articleId: articleId,
      },
    });
    return NextResponse.json(like, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to like the article' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { userId, articleId } = await req.json();

  try {
    await prisma.like.deleteMany({
      where: {
        userId: userId,
        articleId: articleId,
      },
    });
    return NextResponse.json({ message: 'Like removed' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to remove like' }, { status: 500 });
  }
}

// フロントエンド側のコード

// export const likeArticle = async (userId: string, articleId: string) => {
//   const response = await fetch('/api/likes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId, articleId }),
//   });

//   if (!response.ok) {
//     throw new Error('Failed to like the article');
//   }

//   return response.json();
// };

// export const unlikeArticle = async (userId: string, articleId: string) => {
//   const response = await fetch('/api/likes', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId, articleId }),
//   });

//   if (!response.ok) {
//     throw new Error('Failed to unlike the article');
//   }

//   return response.json();
// };

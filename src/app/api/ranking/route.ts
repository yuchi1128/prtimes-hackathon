// src/app/api/ranking/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const articles = await prisma.article.findMany({
      include: {
        _count: {
          select: { likes: true },
        },
      },
      orderBy: {
        likes: {
          _count: 'desc',
        },
      },
    });

    const result = articles.map((article) => ({
      id: article.id,
      slug: article.slug,
      createdAt: article.createdAt,
      published: article.published,
      authorId: article.authorId,
      thumbnailURL: article.thumbnailURL,
      content: article.content,
      title: article.title,
      likeCount: article._count.likes,
    }));

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to retrieve articles' }, { status: 500 });
  }
}

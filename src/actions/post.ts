"use server";

import { z } from "zod";
import { formSchema } from "@/app/posts/create/page";
import { BBDataType } from "@/types/type";
import { Article } from "@/types/type";
import prisma from "@/lib/prismaClient";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//全記事取得
export const getAllData = async () => {
  const bbData: Article[] = await prisma.article.findMany();
  return bbData;
};

//投稿詳細取得
export const getDetailData = async (id: any) => {
  const bbDetailData = await prisma.article.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return bbDetailData;
};

//新規投稿
export const postBB = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.article.create({
    data: {
      username,
      title,
      content,
    },
  });

  revalidatePath("/");
  redirect("/");
};

//編集処理
export const editBB = async (
  editId: any,
  { username, title, content }: z.infer<typeof formSchema>
) => {
  try {
    await prisma.article.update({
      where: {
        id: parseInt(editId),
      },
      data: {
        username: username,
        title: title,
        content: content,
      },
    });
    console.log("log: edit done");
  } catch (error) {
    console.log(editId, { username, title, content });
    console.error("log: edit error");
  }

  revalidatePath("/");
  redirect("/");
};

//削除処理
export const deleteBB = async (id: any) => {
  try {
    await prisma.article.delete({
      where: {
        id: parseInt(id),
      },
    });
    console.log("log: delete done");
  } catch (error) {
    console.error("log: delete error");
  }
  revalidatePath("/");
  redirect("/");
};

import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

const Heart = async () => {
  const likeArticle = async (userId: string, articleId: string) => {
    const response = await fetch("/api/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, articleId }),
    });

    if (!response.ok) {
      throw new Error("Failed to like the article");
    }

    return response.json();
  };

  const unlikeArticle = async (userId: string, articleId: string) => {
    const response = await fetch("/api/likes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, articleId }),
    });

    if (!response.ok) {
      throw new Error("Failed to unlike the article");
    }

    return response.json();
  };

  const getLikeCount = async (
    articleId: string
  ): Promise<{ articleId: string; likeCount: number }> => {
    const response = await fetch(
      `http://localhost:3000/api/likes?articleId=${articleId}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch like count");
    }

    return response.json();
  };

  const heartCount = await getLikeCount("66d01fb868ca9832f3880236");

  return (
    <div className="w-full">
      <div>
        <HeartIconOutline className="mx-auto w-10 text-slate-700" />
      </div>
      <div className="text-center">{heartCount.likeCount}</div>
    </div>
  );
};

export default Heart;

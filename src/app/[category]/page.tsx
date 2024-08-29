"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { NewspaperIcon, ComputerDesktopIcon, CakeIcon, BeakerIcon } from '@heroicons/react/24/outline';


const categories = [
  { name: '総合', categoryName: "general" },
  { name: '食品', categoryName: "food" },
  { name: 'IT', categoryName: "it" },
  { name: 'ロボット', categoryName: "robot" },
  { name: 'その他', categoryName: "other" },
];

const timeFrames = ['1時間以内', '今日', '今週', '今月'];

const articles = [
  { id: 1, title: '大学生が開発したAIアプリが話題に', category: 'IT', date: '2024-08-29' },
  { id: 2, title: '食品ロス削減アプリで起業した高校生', category: '食品', date: '2024-08-28' },
  { id: 3, title: '介護ロボットのプロトタイプを発表', category: 'ロボット', date: '2024-08-27' },
];

const rankings = [
  { id: 1, title: '大学生チームが開発した環境配慮型食品がクラウドファンディングで大成功', views: 15000 },
  { id: 2, title: '高校生プログラマーが作成したアプリが10万ダウンロードを突破', views: 12000 },
  { id: 3, title: '中学生が考案した新しいリサイクル方法が特許取得', views: 10000 },
  { id: 4, title: '中学生が考案した新しいリサイクル方法が特許取得', views: 10000 },
  { id: 5, title: '中学生が考案した新しいリサイクル方法が特許取得', views: 10000 },
];

export default function Homepage({ params }: { params: { category: string }}) {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(timeFrames[0]);
  const [currentTab, setCurrentTab] = useState("general")
  const router = useRouter()

  useEffect(() => {
    setCurrentTab(params.category)
    console.log(params.category)
  }, [params])

  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      {/* サイドバー */}
      <div className="w-64 bg-[#9ba88d] pt-6">
        <h1 className="text-2xl font-bold text-white mb-6 ml-4">PR TIMES STUDENT</h1>
        <nav>
          <ul>
            {categories.map((category) => (
              <li key={category.name} className="">
                {
                  currentTab == category.categoryName
                  ?
                  <Link href={"/" + category.categoryName}>
                    <div className="flex items-center text-[#9ba88d] bg-white hover:text-gray-200 border-b pb-1 pl-4">
                    {category.name}
                    </div>
                  </Link>
                  :
                  <Link href={"/" + category.categoryName}>
                  <div className="flex items-center text-white hover:text-gray-200 border-b pb-1 pl-4">
                  {category.name}
                  </div>
                  </Link>
                }

              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 p-8">
        {/* ランキング */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">ランキング</h2>
            <div className="relative">
              <select
                value={selectedTimeFrame}
                onChange={(e) => setSelectedTimeFrame(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:border-[#9ba88d]"
              >
                {timeFrames.map((timeFrame) => (
                  <option key={timeFrame} value={timeFrame}>
                    {timeFrame}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            {rankings.map((ranking, index) => (
              <div key={ranking.id} className="flex items-center mb-4 last:mb-0">
                <span className="text-2xl font-bold mr-4 text-[#9ba88d]">{index + 1}</span>
                <div className="border-b w-full">
                  <h3 className="font-semibold">{ranking.title}</h3>
                  <p className="text-sm text-gray-500">{ranking.views.toLocaleString()} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 新着記事 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">新着記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg border-0 hover:border shadow-md overflow-hidden">
                <div className="p-6">
                  <span className="inline-block bg-[#9ba88d] text-white text-xs px-2 py-1 rounded-full mb-2">
                    {article.category}
                  </span>
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
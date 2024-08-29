"use client";

import React, { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'

export default function LoginPage() {

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [nowLoading, setNowLoading] = useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleLogin(){
    
  }
  
  return (
    <div className="min-h-screen w-full bg-gray-300">
      <div className="flex justify-center">
        <div className="bg-white rouded-lg mt-16  rounded-lg flex flex-col items-center">
          <div className="px-9 pt-7">
            <div className="text-lg font-bold w-full text-center">ユーザーログイン</div>
            <div className="flex items-center relative mt-5">
              <UserIcon className="w-5 h-5 text-gray-400 absolute left-3" />  
              <Input className="pl-10 w-[320px] border-2 border-gray-300
              focus-visible:border-sky-600 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0" 
              placeholder='ユーザー名'
              name="username"
              value={loginData.username}
              onChange={handleInput} />
            </div>
            <div className="flex items-center relative mt-5">
              <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-3" />  
              <Input type='password' className="pl-10 w-[320px] border-2 border-gray-300
              focus-visible:border-sky-600 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0" 
              placeholder='パスワード'
              name="password"
              value={loginData.password}
              onChange={handleInput} />
            </div>
            <div className="w-full text-right cursor-pointer text-sm text-blue-500 mt-4">パスワードをお忘れの場合</div>
            <Button 
            disabled={nowLoading}
            onClick={handleLogin} 
            className="mt-8 bg-orange-500 w-full text-white font-bold">ログイン</Button>
          </div>
          <div className="h-px bg-gray-300 w-full my-6"></div>
          <div className="w-full px-9">
          <Button variant="outline" className="w-full mb-8 border-orange-500 text-orange-500 font-bold">ユーザー登録</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

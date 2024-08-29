'use client';

import { User } from '@/types/userType';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const profile = {
    id: 1,
    uuid: 'test',
    password: 'test',
    article: 'test',
    profile: {
        username: 'test',
        profile_img_url: 'https://sushida.net/',
        twitter_url: 'https://x.com/home',
        facebook_url: 'https://www.facebook.com/?locale=ja_JP',
        description: 'testtest',
    }
}

const ProfileDetail: React.FC = () => {

//   const [profile, setProfile] = useState<User | null>(null);

//   const searchParams = useSearchParams();
//   const id = searchParams.get('id');

//   useEffect(() => {
//     if (!id) return;

//     const getProfile = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/api/profile/${id}`, {
//           headers: {
// 
//           },
//         });
//         setProfile(testUser);
//       } catch {
//         console.log('error');
//       }
//     };
//     getProfile();
//   }, [id]);


  if (!profile) {
    return <p>Loading...</p>;
  } else {
      return (
        <div className="container mx-auto p-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Image
                src={profile.profile.profile_img_url}
                alt={`${profile.profile.username}のプロフィール画像`}
                width={100}
                height={100}
                className="rounded-full mr-4"
              />
              <h1 className="text-2xl font-bold">{profile.profile.username}</h1>
            </div>
    
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">自己紹介</h2>
              <p>{profile.profile.description}</p>
            </div>
    
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">SNSリンク</h2>
              <div className="flex space-x-4">
                {profile.profile.twitter_url && (
                  <Link href={profile.profile.twitter_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    X (Twitter)
                  </Link>
                )}
                {profile.profile.facebook_url && (
                  <Link href={profile.profile.facebook_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Facebook
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      );
  }

}

export default ProfileDetail;

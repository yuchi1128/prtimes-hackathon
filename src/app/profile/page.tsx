'use client'; 

import { Profile, User } from '@/types/userType';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const profileList:React.FC = () => {

  const [profiles, setProfiles] = useState<User[]>([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/profile/', {
          headers: {

          },
        });
        setProfiles(res.data);
      } catch {
        console.log("error");
      }
    };
    getProfile();
  },[]);

  return (
    profiles.map((profile) => 
     (
        <Link href={`/profile/${profile.id}`}>{profile.profile.username}の詳細ページ</Link>
      )
  )
  )
}

export default profileList



// 'use client';

// import { User } from '@/types/userType';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const ProfileList: React.FC = () => {

//   const [profiles, setProfiles] = useState<User[]>([]);

//   useEffect(() => {
//     const getProfiles = async () => {
//       try {
//         const res = await axios.get('http://localhost:8000/api/profile/', {
//           headers: {
//             'Authorization': `Bearer YOUR_TOKEN_HERE`, // 必要に応じてトークンを設定
//           },
//         });
//         setProfiles(res.data);
//       } catch {
//         console.log("error");
//       }
//     };
//     getProfiles();
//   },[]);

//   return (
//     <div className="container mx-auto p-4">
//       {profiles.map((profile) => (
//         <div key={profile.id} className="bg-white shadow-lg rounded-lg p-6 mb-6">
//           <div className="flex items-center">
//             <Image
//               src={profile.profile.profile_img_url}
//               alt={`${profile.profile.username}のプロフィール画像`}
//               width={100}
//               height={100}
//               className="rounded-full mr-4"
//             />
//             <div>
//               <h2 className="text-xl font-bold">{profile.profile.username}</h2>
//               <p className="text-gray-600">{profile.profile.description}</p>
//               <Link href={`/profile/${profile.id}`} className="text-blue-500 hover:underline">
//                 {profile.profile.username}の詳細ページ
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProfileList;

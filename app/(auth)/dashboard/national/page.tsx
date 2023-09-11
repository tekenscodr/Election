'use client'
import { useAuth } from '@/app/backjob/authmiddleware';
import { Header } from '@/app/components/Header';
import TopCards from '@/app/components/TopCards';
import Tile from '@/app/components/image';
import NationalCard from '@/app/components/national/NationalCard';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { RxSpeakerModerate } from 'react-icons/rx';

function National() {
  const { loading, user, logout } = useAuth();
  const router = useRouter();
  if(loading){
  return (
    <div className='w-full h-screen'>
      <p>Loading...</p>
    </div>
  )
}else if (!loading&& !user){
  router.replace('/')
}

return (
  <>
   {!loading&& user&&(
  <div className='bg-white py-5 min-h-screen w-full'>
    <TopCards/>

     {/* Images of Candidates */}
    <div className="flex ">
      <div className="m-3">
       <Tile/>
      </div>
    </div>

  <div className='flex'>  
  <div className='m-5 w-1/2'>
    <h1 className='p-2 text-black text-lg text-justify font-bold'>Results</h1>
    <NationalCard />
  </div>
 
  <div className='m-5 w-1/2'>
    <h1 className='p-2 text-black text-lg text-justify font-bold'>Recent Uploads</h1>
    <ul>
      <li className='bg-grey-50 hover:bg-grey-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
        <div className='bg-blue-200'> 
        <RxSpeakerModerate className='text-blue-800 '/> </div>
        <div className='pl-4'>
          <p className='text-black font-bold'>Constituency Name</p>
          <p className='text-gray-700'>just now</p>
        </div>
      </li>
    </ul>
  </div>
  </div>
  </div>
   )}
   
   </>
)
}

export default National
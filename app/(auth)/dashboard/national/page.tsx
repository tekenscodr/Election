'use client'
import { useAuth } from '@/app/backjob/authmiddleware';
import { Header } from '@/app/components/Header';
import TopCards from '@/app/components/TopCards';
import Tile from '@/app/components/image';
import NationalCard from '@/app/components/national/NationalCard';
import Recent from '@/app/components/national/Recent';
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
    <Recent/>
  </div>
  </div>
  </div>
   )}
   
   </>
)
}

export default National
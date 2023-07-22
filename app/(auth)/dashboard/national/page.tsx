'use client'
import { useAuth } from '@/app/backjob/authmiddleware';
import { Header } from '@/app/components/Header';
import TopCards from '@/app/components/TopCards';
import RegionalCards from '@/app/components/region/RegionalCards';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

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
  <div className='m-5'>
    <RegionalCards/>
  </div>
  </div>
   )}
   
   </>
)
}

export default National
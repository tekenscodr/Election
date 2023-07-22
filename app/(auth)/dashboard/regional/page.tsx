'use client'
import { useAuth } from '@/app/backjob/authmiddleware';
import { Header } from '@/app/components/Header';
import RegionalCards from '@/app/components/region/RegionalCards';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Regional = () => {
    const router = useRouter();
    const { user, loading } = useAuth();
    // console.log(token)
    useEffect(() => {
      if (!loading && !user?.token) {
        router.push('/');
      }
    }, [loading, user, router]);
  
    if (loading) {
      return <p>Loading......</p>;
    }
  
  return (
    <>
     {!loading&& user?.token&&(
    <div className='bg-white py-5 min-h-screen w-full'>
    <Header/>
      <br />
      <br />
    <div className='m-4'>
      <RegionalCards/>
    </div>
    </div>
     )}
     </>
  )
}

export default Regional
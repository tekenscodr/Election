'use client'
import { useAuth } from '@/app/backjob/authmiddleware';
import { useRouter } from 'next/navigation';
// import router from 'next/router';
// import React, { useEffect, useState } from 'react' 
// import getPercentage from '@/app/backjob/percentage';
// import { Header } from '@/app/components/Header';
// import ProgressBar from '@/app/components/ProgressBar';
// import RecentVotes from '@/app/components/RecentVotes';
// import TopCards from '@/app/components/TopCards';
// // import React from 'react'

const Reports = () => {
    const router = useRouter();
    const { user, loading } = useAuth();
    if (loading){
      return(<p>Loading....</p>)
    }else if (!loading && !user?.token){
      router.push('/')
    }
  return (
    <>
    {/* {loading && <p>Loading......</p>}
    {!loading&&!token&& router.push('/login')}
    {token && 
   (  */}
   <div className='bg-white py-5 min-h-screen w-full'>
      <div className="flex justify-end">
        <button className=" border-2 m-4 px-3 rounded border-black 
        hover:bg-gray-900 hover:text-zinc-100 focus:ring
         focus:ring-gray-300"
         onClick={()=>{router.push('/dashboard/')}}
         >Close</button>
      </div>
      <h3 className="uppercase subpixel-antialiased font-bold text-xl text-center m-4"> Report </h3>
      <div className="m-5 min-h-screen">
        <form action="">
          <div className="flex p-5 justify-between">
            <label className='font-semibold'>Title</label>
            <input type='text' className="border border-gray-500 focus:border-indigo-500 focus:outline-none"></input>
          </div>
          <div className="flex p-5 justify-between">
            <label className='mx-5 ml-0 font-semibold'>Message</label>
            <textarea
              // value={text}
              className='border border-gray-500 focus:border-indigo-500 focus:outline-none'
              rows={4}
              cols={35}/>

      </div> 
          <div className="flex justify-end m-5 mb-0 p-5">
          <button className="bg-blue-500 rounded py-3 px-5 text-zinc-200 hover:bg-sky-700 ">
            Submit</button>
          </div>
        </form>
      </div>
    </div>
    {/* )}  */}
    </>
  )
}

export default Reports
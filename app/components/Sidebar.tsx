'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'

const Sidebar = ({ children }: {
    children: React.ReactNode
  }) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href="/dashboard/national/">
                <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                    <RxSketchLogo size={20 } />
                </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 '></span>
                <Link href="/dashboard/national/users">
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <RxDashboard size={20 } />
                </div> 
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 '></span>
                <Link href="/agents">
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <RxPerson size={20 } />
                </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 '></span>
                <Link href="/votes">
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <HiOutlineShoppingBag size={20 } />
                </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 '></span>
                <Link href="/settings">
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <FiSettings size={20 } />
                </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2 '></span>
                
            </div>
        </div>   
        <main className='ml-20 w-full'>{children} </main>
    </div>
  )
}

export default Sidebar;
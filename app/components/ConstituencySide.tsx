import Link from 'next/link'
import React from 'react'
import { Disclosure } from "@headlessui/react"
import Image from 'next/image'
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx'
import { GiHamburgerMenu } from "react-icons/gi"
import { HiDocumentReport } from "react-icons/hi"
import { MdOutlineAnalytics, MdOutlineLogout } from "react-icons/md"
import { BiMessageSquareDots } from "react-icons/bi"

const Sidebar = (
    { children }: {
    children: React.ReactNode
  }
  ) => {
  return (
    <div>
        {/* Mobile menu button */}
        <Disclosure as="nav">
            <Disclosure.Button className="absolute top-4 right-4 
            inline-flex items-center peer justify-center 
            rounded-md p-2 text-gray-900 
            hover:text-white focus:outline-none 
            focus:ring-2 focus:ring-inset focus:ring-white">
                <GiHamburgerMenu className='block md:hidden h-6 w-6' 
                aria-hidden="true" />
            </Disclosure.Button>
            <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
                <div className='flex flex-col justify-start items-center'>
                    <h1 className='text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full' >
                        Agent Dashboard
                    </h1>
                    {/*  First Selection */}
                    <div className='my-4 border-b border-gray-100 pb-4'>
                    <Link href="/dashboard/constituency/report" >
                        <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            {/*Other Icons*/}
                                <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white"/>
                                <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>
                                    Reports</h3>
                        </div>
                        </Link>
                        <Link href="/dashboard/constituency/post-votes" >
                        <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            {/*Other Icons*/}
                                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white"/>
                                <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>
                                    Results</h3>
                        </div>
                        </Link>
                    </div>
                    
                    {/* Logout */}
                    <div className='my-9 fixed bottom-0'>
                    <Link href="/dashboard/post-votes" >
                        <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            {/*Other Icons*/}
                                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white"/>
                                <h3 className='text-base text-grey-800 group-hover:text-white font-semibold'>
                                    Logout</h3>
                        </div>
                        </Link>
                        
                    </div>

                </div>
            </div>
            {children}
        </Disclosure>

    </div>

  )
}

export default Sidebar
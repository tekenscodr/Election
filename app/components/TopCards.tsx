import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4 '>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>4,000,000</p>
                <p className='text-gray-600'>Expected Voters</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-600'>100%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>1,000,000</p>
                <p className='text-gray-600'>Total Votes</p>
            </div>
            <p className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-orange-600'>+65%</span>
            </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>16,000</p>
                <p className='text-gray-600'>Others</p>
            </div>
            <p className='bg-red-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-red-600'>+5%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCards
import React from 'react'
import Image from 'next/image'
const Tile = () => {
  
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4 
    aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 flex justify-between'>
      <div className=''>
        <Image
        className='m-5'
        src="/Kennedy Agyepong.jpg"
        alt=""
        width={80}
        height={100}
        /> 
        </div>
        <div className=''>
         <Image
         className='m-5'
        src="/Mahamud Bawumia.jpg"
        alt=""
        width={80}
        height={100}
        />
        </div>
        <div className=''>
         <Image
         className='m-5'
        src="/Afriyie Akoto.jpg"
        alt=""
        width={80}
        height={100}
        />
        </div>
        <div className=''>
         <Image
         className='m-5'
        src="/Francis Addai Nimo.jpg"
        alt=""
        width={80}
        height={100}
        />
        </div>
    </div>
  )
}

export default Tile
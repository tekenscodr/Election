import React from 'react'
import Image from 'next/image'
const Tile = () => {
  
  return (
    <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 flex justify-between'>
        <Image
        className='m-5'
        src="/Kennedy Agyepong.jpg"
        alt=""
        width={80}
        height={100}
        />
         <Image
         className='m-5'
        src="/Mahamud Bawumia.jpg"
        alt=""
        width={80}
        height={100}
        />
         <Image
         className='m-5'
        src="/Afriyie Akoto.jpg"
        alt=""
        width={80}
        height={100}
        />
         <Image
         className='m-5'
        src="/Francis Addai Nimo.jpg"
        alt=""
        width={80}
        height={100}
        />
    </div>
  )
}

export default Tile
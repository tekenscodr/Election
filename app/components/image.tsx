import React from 'react'
import Image from 'next/image'
const Tile = () => {
  
  return (
    <div className='grid lg:grid-cols-4 gap-4 p-2 
   aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg flex items-center justify-between'>
      <div className='relative'>
      <div className='h-32'>
        <Image
        layout='intrinsic'
        className=''
        src="/Kennedy Agyepong.jpg"
        alt=""
        width={90}
        height={80}
        /> 
        <p className="font-bold text-black">Hon. Kennedy Agyepong</p>
        </div>
      </div>
      <div className='relative'>
      <div className='h-32'>
        <Image
        layout='intrinsic'
        className=''
        src="/Mahamud Bawumia.jpg"
        alt=""
        width={90}
        height={90}
        />
        <p className="font-bold text-black pt-3">Mahamud Bawumia</p>
        </div>
      </div>
      <div className='relative'>
      <div className='h-32'>
        <Image
        layout='intrinsic'
        className=''
        src="/Afriyie Akoto.jpg"
        alt=""
        width={100}
        height={120}
        /> 
        <p className="font-bold text-black">Afriyie Akoto</p>
        </div>
      </div>
      <div className='relative'>
      <div className='h-32'>
        <Image
        layout='intrinsic'
        className='mt-3 mb-2'
        src="/Francis Addai Nimo.jpg"
        alt=""
        width={100}
        height={300}
        /> 
        <p className="font-bold text-black">Francis Addai Nimo</p>
        </div>
      </div>
    </div>
  )
}

export default Tile
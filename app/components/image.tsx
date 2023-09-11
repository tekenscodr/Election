import React from 'react'
import Image from 'next/image'
const Tile = () => {
  return (
    <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
        <Image
        src=""
        alt="https://bit.ly/placeholder-img"
        width={45}
        height={60}
        />
    </div>
  )
}

export default Tile
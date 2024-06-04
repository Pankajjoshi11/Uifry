import React from 'react'
import Image from 'next/image'

const Prefooter = () => {
  return (
    <div className='flex relative items-center justify-center m-4 p-4 mx-4 md:mx-40 h-screen'>
      <Image
        src='/assets/images/Frame.png'
        width={1200}
        height={200}
        alt='main'
        className='p-8 mt-20 z-10 max-w-full h-auto'></Image>
      <Image
        src='/assets/images/Group 10000023568.png'
        width={400}
        height={300}
        alt='bg-color'
        className='absolute top-0 max-w-full h-auto left-0'></Image>
    </div>
  )
}

export default Prefooter

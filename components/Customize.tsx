import React from 'react'
import Image from 'next/image'

const Customize = () => {
  return (
    <div className='flex relative mb-16 h-screen m-2 p-2 relative'>
      <div className="flex-col m-2 mx-6 p-2 px-4">
        <Image
          src='/assets/images/Group 35937.png'
          width={750}
          height={750}
          alt='group-iphone'
          className='relative z-30'></Image>
        <Image
          src='/assets/images/Star 6.png'
          width={48}
          height={64}
          alt='star 6'
          className='absolute top-10 left-1/3 z-30'></Image>
        <Image
          src='/assets/images/Group.png'
          width={260}
          height={64}
          alt='credit card'
          className='absolute top-60 left-80 z-50'></Image>
        <Image
          src='/assets/images/Group 35932.png'
          width={550}
          height={64}
          alt='background-red'
          className='absolute top-60 left-60'></Image>
      </div>
      <div className="mt-40 py-6 flex-col relative items-center justify-between">
        <div className="flex relative items-center">
          <Image
            src='/assets/images/Group 35899.png'
            width={48}
            height={60}
            alt='logo'></Image>
          <h1 className='m-2 p-2 text-2xl font-bold'>Fully Customizable</h1>
        </div>
        <div className="flex-col relative m-2 p-2 text-lg text-gray-700">
            <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan,</p>
            <p>ultricies. In ultrices malesuada elit mauris etiam odio. Duis </p>
            <p>tristique lacus, et blandit viverra nisl velit. Sed mattis </p>
            <p>rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget </p>
            <p>eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
        <Image
            src='/assets/images/Star 7.png'
            width={64}
            height={60}
            alt='star'
            className='absolute top-3/4 right-10'></Image>

      </div>

    </div>
  )
}

export default Customize
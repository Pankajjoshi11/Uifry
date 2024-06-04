import React from 'react';
import Image from 'next/image';

const Advantages = () => {
  return (
    <div className='relative mt-16 flex flex-col md:flex-row h-screen m-4 mt-10 p-4'>
      <div className="flex-col relative m-4 p-4 justify-between items-center md:items-start">
        <div className="flex-col relative m-2 p-2">
          <h1 className='text-customRed font-semibold text-3xl'>Advantages</h1>
          <h1 className='font-bold text-6xl pt-2'>Why Choose Uifry?</h1>
        </div>
        <div className="flex relative m-2 p-2 items-center">
          <Image
            src='/assets/images/Group 35899.png'
            width={50}
            height={50}
            alt='bell-icon'
            className='mt-6'
          />
          <h1 className='items-center mt-6 px-6 font-bold text-2xl'>Clever Notifications</h1>
        </div>
        <div className="flex-col relative m-2 p-2 text-lg text-gray-700 text-center md:text-left">
          <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan,</p>
          <p>ultricies. In ultrices malesuada elit mauris etiam odio. Duis </p>
          <p>tristique lacus, et blandit viverra nisl velit. Sed mattis </p>
          <p>rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget </p>
          <p>eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-between px-6 relative">
        <Image
          src='/assets/images/Group 35935.png'
          width={700}
          height={700}
          alt='iphone-2'
          className='z-10'
        />
        <Image
          src='/assets/images/Group 35931.png'
          width={500}
          height={700}
          alt='iphone-2'
          className='absolute top-56 left-1/2 transform -translate-x-1/2 md:left-74'
        />
        <Image
          src='/assets/images/Star 5.png'
          width={64}
          height={64}
          alt='iphone-2'
          className='absolute right-6 top-20'
        />
      </div>
    </div>
  );
}

export default Advantages;

import React from 'react';
import Image from 'next/image';

const Premium = () => {
  return (
    <div className="relative flex mt-16 flex-col md:flex-row h-screen">
      <div className="relative flex flex-col items-center md:items-start md:w-1/2">
        <div className="relative">
          <Image
            src='/assets/images/Group 35933.png'
            width={750}
            height={700}
            alt='iphone'
            className='m-2 mx-10 relative z-10'>
          </Image>
          <Image
            src='/assets/images/Group 35930.png'
            width={700}
            height={700}
            alt='bgcolor'
            className='absolute top-0'>
          </Image>
          <Image
            src='/assets/images/Star 8.png'
            width={50}
            height={50}
            alt='bgcolor'
            className='absolute right-20 md:right-88 top-40'>
          </Image>
        </div>
      </div>
      <div className="flex flex-col relative mt-20 p-4 md:w-1/2">
        <div className="flex-col relative z-10" id="features">
          <h1 className='text-customRed text-2xl font-semibold '>FEATURES</h1>
          <h1 className='text-5xl font-bold items-center justify-between'>Uifry Premium</h1>
        </div>
        <div className="flex-col relative mt-10">
          <div className="flex relative">
            <Image
              src='/assets/images/star-05.png'
              width={25}
              height={30}
              alt='star'></Image>
            <h1 className='px-4 font-bold text-xl'>Budgeting Intervals</h1>
          </div>
          <div className="relative py-2 text-lg text-gray-600">
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet</p>
            <p> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor</p>
          </div>
        </div>

        <div className="flex-col relative mt-10">
          <div className="flex relative">
            <Image
              src='/assets/images/cube-02.png'
              width={25}
              height={30}
              alt='star'></Image>
            <h1 className='px-4 font-bold text-xl'>Budgeting Intervals</h1>
          </div>
          <div className="relative py-2 text-lg z-10 text-gray-600">
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet</p>
            <p> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor</p>
          </div>
        </div>

        <div className="flex-col relative mt-10">
          <div className="flex relative">
            <Image
              src='/assets/images/Icon.png'
              width={25}
              height={25}
              alt='star'></Image>
            <h1 className='px-4 font-bold text-xl'>Budgeting Intervals</h1>
          </div>
          <div className="relative py-2 text-lg z-10 text-gray-600">
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet</p>
            <p> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src='/assets/images/Group 35897.png'
          width={300}
          height={300}
          alt='corner-color'
          className='absolute top-1/3 right-0'
        />
      </div>
    </div>
  );
}

export default Premium;

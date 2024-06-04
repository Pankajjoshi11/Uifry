import React from 'react';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className="m-5 rounded-lg flex justify-between items-center">
      <div className='flex items-center space-x-14'>
        <div className="flex items-center space-x-2">
          <Image
            src='/assets/images/Frame1.png'
            width={34}
            height={34}
            alt='logo'
            className='h-10 w-10'
          />
          <p className='text-2xl font-bold text-gray-700'>
            uifry
          </p>
        </div>
        <div className="mt-2 space-x-8 text-xl cursor-pointer font-semibold flex">
          <p className='flex text-customRed'>Home </p>
          <p className='flex'>About Us </p>
          <p className='flex'>Pricing </p>
          <p className='flex'>Features </p>
        </div>
      </div>
      <div className="bg-red">
        <button className='bg-black text-white rounded-md px-4 py-2 hover:bg-gray-700'>
          Download Now
        </button>
      </div>
    </div>
  );
}

export default Nav;

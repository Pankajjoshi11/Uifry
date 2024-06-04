import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex m-2 mx-14 px-6 justify-between items-center ">
      <div className="flex-col m-2 p-2">
        <div className="flex-col p-2 m-4">
          <h1 className='font-bold text-6xl'>Make the best</h1>
          <h1 className='font-bold text-6xl'>financial Decisions</h1>
        </div>
        <div className="flex-col p-2 m-4 text-lg">
          <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet </p>
          <p>faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

        </div>
        <div className="flex p-2 m-4">
          <button 
            className='bg-black text-white rounded-sm px-4 py-2 hover:bg-gray-700'>
            Get Started 
          </button>
          <div className="flex m-2 px-4 items-center cursor-pointer">
            <Image
              src='/assets/images/Group 3.png'
              width={30}
              height={20}
              alt='watch'>
            </Image>
            <p className='text-lg items-center px-2 font-semibold'>Watch Video</p>
          </div>
        </div>
        <div className="flex">
        <Image
          src='/assets/images/Star 8.png'
          width={50}
          height={50}
          alt='image'
          className='absolute left-60 top-100'>
          </Image>
          <Image
          src='/assets/images/Group 35924.png'
          width={450}
          height={200}
          alt='image'>
          </Image>
        </div>
      </div>
      <div className="flex-col justify-between ">
        <Image
          src='/assets/images/Frame 1.png'
          height={500}
          width={500}
          alt='frame1'
          className='absolute z-10 top-20 right-20'>
        </Image>
        <Image
          src='/assets/images/iPhone-13-Pro-Front (1).png'
          height={300}
          width={500}
          alt='frame1'
          className='absolute z-20 top-40 right-20'>
        </Image>
        <Image
          src='/assets/images/iPhone-13-Pro-Front.png'
          height={300}
          width={500}
          alt='frame1'
          className='absolute z-30 top-20 right-40'>
        </Image>
      </div>
    </div>
  );
}

export default Home;

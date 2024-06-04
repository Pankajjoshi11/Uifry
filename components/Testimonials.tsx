import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="flex mt-16 flex-col h-screen justify-center items-center px-4 md:px-8">
      <h1 className="text-2xl p-2 text-center">Testimonials</h1>
      <h1 className="text-4xl md:text-6xl font-bold text-center">What Other Users</h1>
      <h1 className="text-4xl md:text-6xl font-bold p-2 text-center">Say About Us?</h1>
      <div className="flex flex-col md:flex-row relative m-2 p-2">
        <div className="flex-col relative">
          <Image
            src='/assets/images/Group 1000002332.png'
            width={600}
            height={700}
            alt='people'
            className='z-10 mx-8 relative'
          />
          <Image
            src='/assets/images/Group 1000002356.png'
            width={500}
            height={700}
            alt='people'
            className='top-20 left-20 absolute'
          />
        </div>
        <div className="flex-col relative mt-4 md:mt-0 md:ml-8">
          <div className="flex-col relative m-2 p-2 mt-8">
            <h1 className='text-2xl md:text-3xl items-center mt-8 font-bold'>The Best Financial Accounting</h1>
            <h1 className='text-2xl md:text-3xl items-center font-bold'>App Ever!</h1>
          </div>
          <div className="flex-col relative m-2 p-2 text-base md:text-lg text-gray-700">
            <p>"Arcu at dictum sapien, mollis. Vulputate sit id accumsan,</p>
            <p>ultricies. In ultrices malesuada elit mauris etiam odio. Duis </p>
            <p>tristique lacus, et blandit viverra nisl velit. Sed mattis </p>
            <p>rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget </p>
            <p>eget ac dolor neque lorem sapien, suspendisse aliquam."</p>
          </div>
          <div className="flex items-center relative">
            <Image
              src='/assets/images/Group 35917.png'
              width={200}
              height={100}
              alt='people 1'
              className='z-10 mt-8 m-2 pt-2 relative'
            />
          </div>
          <div className="flex relative m-2 p-2">
            <p className='text-lg font-bold'>Nick Jonas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

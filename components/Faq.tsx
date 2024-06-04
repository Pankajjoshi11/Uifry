import React from 'react'
import Image from 'next/image'

const Faq = () => {
  return (
    <div className='flex-col relative mx-4 md:mx-6 p-4 md:p-8 h-screen'>
      <div className="flex flex-col md:flex-row relative">
        <div className="flex-col relative m-2 p-2">
          <h1 className='text-2xl text-customRed ml-6'>FAQ</h1>
          <h1 className='text-4xl md:text-6xl font-bold ml-6'>Frequently Asked</h1>
          <h1 className='text-4xl md:text-6xl font-bold ml-6'>Questions</h1>
        </div>
        <div className="flex items-center justify-center md:ml-40">
          <Image
            src='/assets/images/Star 11.png'
            width={64}
            height={64}
            alt='star'
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row relative px-4 md:px-8 mt-2 m-2 p-2">
        <div className="flex-col bg-customRed p-4 rounded-md w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className='text-white text-2xl font-bold'>The Best Financial Account</h1>
          <h1 className='text-white text-2xl font-bold'>App Ever!</h1>
          <p className='text-xl pt-2 text-white'>“Arcu at dictum sapien, mollis. Vulputate sit id </p>
          <p className='text-xl text-white'>accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
        <div className="flex-col p-4 md:px-8 rounded-md w-full md:w-1/2">
          <h1 className='text-2xl font-bold'>The Best Financial Account</h1>
          <h1 className='text-2xl font-bold'>App Ever!</h1>
          <p className='text-xl pt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id </p>
          <p className='text-xl'>accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row relative px-4 md:px-8 mt-2 m-2 p-2">
        <div className="flex-col p-4 rounded-md w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className='text-2xl font-bold'>The Best Financial Account</h1>
          <h1 className='text-2xl font-bold'>App Ever!</h1>
          <p className='text-xl pt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id </p>
          <p className='text-xl'>accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
        <div className="flex-col bg-customRed text-white p-4 md:px-8 rounded-md w-full md:w-1/2">
          <h1 className='text-2xl font-bold'>The Best Financial Account</h1>
          <h1 className='text-2xl font-bold'>App Ever!</h1>
          <p className='text-xl pt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id </p>
          <p className='text-xl'>accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row relative px-4 md:px-8 mt-2 m-2 p-2">
        <div className="flex-col bg-customRed p-4 rounded-md w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className='text-white text-2xl font-bold'>The Best Financial Account</h1>
          <h1 className='text-white text-2xl font-bold'>App Ever!</h1>
          <p className='text-xl pt-2 text-white'>“Arcu at dictum sapien, mollis. Vulputate sit id </p>
          <p className='text-xl text-white'>accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
        <div className="flex-col p-4 md:px-8 rounded-md w-full md:w-1/2">
          <h1 className='text-2xl font-bold'>The Best Financial Account</h1>
          <h1 className='text-2xl font-bold'>App Ever!</h1>
          <p className='text-xl pt-2'>“Arcu at dictum sapien, mollis. Vulputate sit id </p>
          <p className='text-xl'>accumsan, ultricies. In ultrices malesuada elit mauris."</p>
        </div>
      </div>
    </div>
  )
}

export default Faq

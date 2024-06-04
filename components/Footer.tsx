"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const Footer = () => {
  const [email, setEmail] = useState('')
  
  const handleSubscribe = () => {
    console.log('Subscribed email:', email)
  }

  return (
    <div className='flex flex-wrap justify-between m-8 p-8 '>
      <div className="flex flex-col items-start relative p-4 m-4">
        <div className="flex items-center pt-4 mt-4">
          <Image
            src='/assets/images/Frame2.png'
            width={30}
            height={30}
            alt='logo'
            className='m-1'
          />
          <h1 className='text-3xl m-1 font-bold'>uifry</h1>
        </div>
        <div className="flex items-center pt-2">
          <Image
            src='/assets/images/Frame3.png'
            width={24}
            height={24}
            alt='logo'
            className='m-1'
          />
          <h1 className='text-xl m-1 '>Help@Frybix.com</h1>
        </div>
        <div className="flex items-center pt-2">
          <Image
            src='/assets/images/Frame4.png'
            width={24}
            height={24}
            alt='logo'
            className='m-1'
          />
          <h1 className='text-xl m-1 '>+1234 456 678 89</h1>
        </div>
      </div>

      <div className="flex flex-col p-4 m-4">
        <h1 className='font-semibold text-3xl mx-4'>Links</h1>
        <div className="flex flex-col text-xl mx-4">
          <h1 className='py-2'>Home</h1>
          <h1 className='py-2'>About Us</h1>
          <h1 className='py-2'>Bookings</h1>
          <h1 className='py-2'>Blog</h1>
        </div>
      </div>

      <div className="flex flex-col p-4 m-4">
        <h1 className='font-semibold text-3xl mx-4'>Legal</h1>
        <div className="flex flex-col text-xl mx-4">
          <h1 className='py-2'>Terms</h1>
          <h1 className='py-2'>Privacy</h1>
          <h1 className='py-2'>Cookie</h1>
        </div>
      </div>

      <div className="flex flex-col p-4 m-4">
        <h1 className='font-semibold text-3xl mx-4'>Product</h1>
        <div className="flex flex-col text-xl mx-4">
          <h1 className='py-2'>Take Tour</h1>
          <h1 className='py-2'>Live Chat</h1>
          <h1 className='py-2'>Reviews</h1>
        </div>
      </div>

      <div className="flex flex-col p-4 m-4">
        <h1 className='font-semibold text-3xl mx-4'>Newsletter</h1>
        <div className="flex flex-col text-xl mx-4">
          <h1 className='py-2'>Stay Up To Date</h1>
          <div className="flex mt-8">
            <input 
              type="text" 
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-md h-14 text-lg p-4 w-full md:w-60 bg-gray-300'
            />
            <button 
              type='submit'
              onClick={handleSubscribe}
              className='text-white bg-black rounded-md px-4 hover:bg-gray-700 text-lg'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

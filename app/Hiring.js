import React from 'react'
import hiring_left from './assets/hiring_left.png'
import hiring_right from './assets/hiring_right.png'
import rocket from './assets/rocket.svg';
import Image from 'next/image'

const Hiring = () => {
  return (
    <div className='pt-[140px] bg-[#FBFAFA] w-full'>
      <div className='flex justify-center items-center'>
        <div className='pr-[20px]'>
          <Image
            width={318}
            height={319}
            alt=''
            src={hiring_left}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center pb-[120px]">
          <div className="text-center text-gray-600 text-[50px] font-bold leading-[50px]">We are hiring!</div>
          <div className="w-[443px] text-center text-orange-400 text-2xl font-normal leading-[30px] pt-[30px]">
            We're always looking for talented people to join and help build our startups.
            Check out our current openings
          </div>
          <div className="w-[243px] h-[45px] bg-teal-400 rounded-[32.50px] flex justify-center items-center cursor-pointer mt-[30px] text-white text-lg font-bold">
            See current openings
          </div>
        </div>
        <div className='pl-[20px]'>
          <Image
            width={291}
            height={319}
            alt=''
            src={hiring_right}
          />
        </div>
      </div>
      <div className='bg-[#FFC351] w-full px-[120px]'>
        <div className="text-white text-6xl font-bold leading-[55px] pt-[60px]">
          Are you ready <br />to board this rocket ship?
        </div>
        <div className="text-white text-2xl font-medium leading-normal pt-[34px] text-left">
          Share your excitement with us.
        </div>
        <div className='pt-[34px] flex  inline-flex gap-[25px] w-full relative'>
          <div className='bg-[#F3F3F3] pb-[40px] mb-[70px] flex-1 rounded-2xl'>
            <div className='flex flex-col justify-center items-center w-full pt-[72px] gap-[16px]'>
              <div className='px-[42px] w-full'>
                <input className='bg-white h-[54px] w-full rounded-xl pl-4'
                  placeholder='Name*'
                  type='text'
                  required
                />
              </div>
              <div className='px-[42px] w-full'>
                <input className='bg-white h-[54px] w-full rounded-xl pl-4'
                  placeholder='Email*'
                  type='email'
                  required
                />
              </div>
              <div className='px-[42px] w-full'>
                <textarea
                  rows={10}
                  className='bg-white w-full p-4 rounded-xl'
                  placeholder='Message*'
                  required
                />
              </div>
            </div>
            <div className='mx-[42px] mt-[34px] bg-gray-600 rounded-[32.50px] h-[45px] flex justify-center items-center text-neutral-50 text-lg font-bold'>
              Shoot us a message
            </div>
          </div>
          <div className='flex justify-end items-end'>
            <Image
              width={667}
              height={545}
              alt=''
              src={rocket}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hiring
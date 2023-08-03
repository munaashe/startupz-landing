import React from 'react';
import logo from './assets/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='h-[90px] flex inline-flex justify-center items-center w-full'>
      <div className='flex-1 flex justify-start items-center w-full pl-[120px]'>
        <Image
          height={48}
          width={200}
          src={logo}
          alt='logo'
        />
      </div>
      <div className='pr-[120px] flex justify-center items-center gap-[42px]'>
        <div className="text-gray-600 text-lg font-normal leading-[18px] cursor-pointer">Startups</div>
        <div className="text-gray-600 text-lg font-normal leading-[18px] cursor-pointer">Contact</div>
        <div className="flex items-center rounded-[32.50px] border border-teal-400 text-center text-teal-400 text-lg font-bold px-[34px] h-[45px] cursor-pointer">
          Work with us!
        </div>
      </div>
    </nav>
  )
}

export default Navbar
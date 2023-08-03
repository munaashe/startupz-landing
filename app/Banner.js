import React from 'react';
import bannerImage from './assets/bannerImage.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='pt-[145px] min-h-[650px] w-full relative pl-[120px]'>
      <div className=''>
        <div className="text-gray-600 text-[85px] font-bold leading-[85px]">
          We Create.
          <br />
          Startups..
        </div>
        <div className="w-[758px] text-orange-400 text-2xl font-normal leading-[30px] pt-[25px]">
          We are startup studio that develops and <br/>launches new companies.
        </div>
        <div className="w-[157px] h-[45px] bg-teal-400 rounded-[32.50px] flex justify-center items-center mt-[25px] cursor-pointer">
          <div className="text-white text-lg font-bold leading-[18px]">
            See our works.
          </div>
        </div>
      </div>
      <div className='absolute right-0 top-[145px]'>
        <Image
          src={bannerImage}
          alt=''
          height='100%'
          width='100%'
          style={{ zIndex: 2 }}
        />
      </div>
    </div>

  )
}

export default Banner
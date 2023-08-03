import React from 'react'

import thumbs_left from './assets/thumb_left.png';
import thumbs_right from './assets/thumb_right.png';
import Image from 'next/image';
import solveProblems from './assets/solveProblems.png'

const SolvingProblemsBanner = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='pt-[60px] flex w-full justify-end'>
        <div className='bg-[#46B8C8] h-[56px] text-white flex justify-center items-center px-[20px] rounded-tr-[28px] rounded-l-[28px] mr-[140px]'>
          Hi! I am Ben, your virtual assistant.<br />
          How can I make your day better?
        </div>
        <div className="text-neutral-400 text-[25px] font-medium mr-[140px] cursor-pointer">x</div>
      </div>
      <div className='py-[120px]'>
        <div className='py-[6px] flex justify-center items-center'>
          <div className='flex-1 flex justify-end'>
            <Image
              width={59}
              height={66}
              alt=''
              src={thumbs_left}
            />
          </div>
          <div className="text-center text-orange-400 text-[40px] font-bold leading-[50px] px-[34px]">
            We love solving problems!
          </div>
          <div className=''>
            <Image
              width={59}
              height={66}
              alt=''
              src={thumbs_right}
            />
          </div>
          <div className='pl-[146px] pr-[126px]'>
            <Image
              width={114}
              height={114}
              alt=''
              src={solveProblems}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolvingProblemsBanner
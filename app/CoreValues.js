import React from 'react';
import coreValues from './assets/coreValues.svg';
import Image from 'next/image';
import { Card } from './WhoWeAre';

const cardItemsArray = [
  {
    title: '01. Innovation',
    description: 'Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.'
  },
  {
    title: '02. People',
    description: 'Talent is what enable us to create great companies.'
  },
]

const CoreValues = () => {
  return (
    <div className='bg-[#FBFAFA] pt-[154px] pl-[120px] w-full'>
      <div className='flex justify-center items-center w-full'>
        <div className="text-gray-600 text-[50px] font-bold leading-[50px] w-full flex-1 text-left">Our core values</div>
        <div className='pr-[160px] flex justify-center items-center'>
          <Image
            src={coreValues}
            alt=''
            height={90}
            width={108}
          />
        </div>
      </div>
      <div className='pt-[80px] pb-[160px] grid grid-cols-custom gap-10'>
        {cardItemsArray.map((cardItem) => (
          <Card
            key={cardItem.title}
            title={cardItem.title}
            description={cardItem.description}
          />
        ))}
      </div>
    </div>
  )
}

export default CoreValues
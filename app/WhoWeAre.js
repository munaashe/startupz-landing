import React from 'react';
import whoWeAreImage from './assets/whoWeAre.svg';
import Image from 'next/image';

const cardItemsArray = [
  {
    title: '01',
    description: 'We develop innovative products, systems and services'
  },
  {
    title: '02',
    description: 'Next we build teams to scale them into companies'
  },
  {
    title: '03',
    description: 'Each startup solving one problem at a time'
  }
]

const WhoWeAre = () => {
  return (
    <div className='pt-[146px] w-full bg-[#FBFAFA] pl-[120px]'>
      <div className='flex justify-center items-center w-full'>
        <div className="text-gray-600 text-[50px] font-bold leading-[50px] w-full flex-1 text-left">Who we are</div>
        <div className='pr-[160px] flex justify-center items-center'>
          <Image
            src={whoWeAreImage}
            alt=''
            height={88}
            width={75}
          />
        </div>
      </div>
      <div className="w-[874px] text-orange-400 text-2xl font-normal leading-[30px] pt-[32px]">
        We create products that have innovation and technology at their core.<br />
        We value working with talented people that understand the possibilities of today.
      </div>
      <div className='pt-[80px] pb-[160px] grid grid-cols-3 gap-4'>
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

export default WhoWeAre;

export const Card = ({ title, description }) => (
  <div className='flex flex-col justify-start items-start'>
    <div className="text-orange-400 text-3xl font-bold leading-[30px] border-b-2 border-grey-600 p-[20px] pl-0">
      {title}
    </div>
    <div className="text-gray-600 text-3xl font-normal leading-[38px] pt-[26px]">
      {description}
    </div>
  </div>
)
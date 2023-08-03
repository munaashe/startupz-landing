import React from 'react';

//image imports
import tolq from './assets/tolq.png';
import feedbackLabs from './assets/feedbackLabs.png';
import codeKeeper from './assets/codekeeper.png';
import legalSite from './assets/legalSite.png';
import thumbs_left from './assets/thumb_left.png';
import thumbs_right from './assets/thumb_right.png';
import Image from 'next/image';

const projectsArray = [
  {
    name: 'Tolq',
    titleColor: 'text-stone-400',
    description: 'Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.',
    image: tolq,
  },
  {
    name: 'Feedback Labs',
    titleColor: 'text-slate-400',
    description: 'Feedback Labs turns feedback into actionable insights for your team.',
    image: feedbackLabs,
  },
  {
    name: 'Codekeeper',
    titleColor: 'text-cyan-600',
    description: 'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.',
    image: codeKeeper,
  },
  {
    name: 'LegalSite',
    titleColor: 'text-violet-500',
    description: 'Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.',
    image: legalSite,
  },
]

const OurWorks = () => {
  return (
    <div className='pt-[140px] px-[120px] w-full'>
      <div className="text-gray-600 text-[50px] font-bold leading-[50px] text-center">Our works</div>
      <div className='pt-[55px] w-full grid grid-cols-2 gap-4'>
        {projectsArray.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            titleColor={project.titleColor}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
      <div className='py-[180px] flex justify-center items-center'>
        <div className='pr-[20px]'>
          <Image
            width={59}
            height={66}
            alt=''
            src={thumbs_left}
          />
        </div>
        <div className="text-center text-orange-400 text-[40px] font-bold leading-[45px] flex-1">
          Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.
        </div>
        <div className='pl-[20px]'>
          <Image
            width={59}
            height={66}
            alt=''
            src={thumbs_right}
          />
        </div>
      </div>
    </div>
  )
}

export default OurWorks;

const ProjectCard = ({ name, titleColor, description, image }) => (
  <div className="bg-white rounded-[30px] w-full shadow-md shadow-gray-200 flex flex-col items-center">
    <div className={`text-center ${titleColor} text-[32px] font-bold leading-[30px] pt-[45px]`}>{name}</div>
    <div className=" h-[80px] pb-[50px] text-center text-gray-600 text-base font-normal leading-tight pt-[25px] px-[10%]">
      {description}
    </div>
    <Image
      width={350}
      height={220}
      alt=''
      src={image}
    />
    <div className="rounded-[32.50px] border border-teal-400 w-[107px] my-[30px] cursor-pointer">
      <div className="text-center flex justify-center items-center h-[45px] text-teal-400 text-lg font-bold leading-[18px]">More</div>
    </div>
  </div>
);
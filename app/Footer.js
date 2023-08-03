import React from 'react';
import Image from 'next/image';

import logo from './assets/logo.svg';
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'

const Footer = () => {
  return (
    <div className='pt-[90px] pb-[120px] pl-[120px] pr-[100px] w-full grid grid-cols-custom2'>
      <div>
        <Image
          height={48}
          width={200}
          src={logo}
          alt='logo'
        />
        <div className="text-neutral-400 text-lg font-normal leading-[30px] pt-[85px]">
          © 2020 Startupz. <br />
          All rights reserved.
        </div>
      </div>
      <div>
        <div className="text-gray-600 text-lg font-normal leading-[18px]">Companies</div>
        <div className="text-teal-400 text-lg font-normal leading-[35px] pt-[20px]">
          Tolq<br />
          LegalSite<br />
          Codekeeper<br />
          Feedback Labs
        </div>
      </div>
      <div>
        <div className="text-gray-600 text-lg font-normal leading-[18px]">Contact</div>
        <div className="w-[328px] text-neutral-400 text-lg font-normal leading-normal pt-[20px]">
          World Trade Center - The Hague
          Prinses Margrietplantsoen 33
          2595 AM The Hague<br />
          The Netherlands
        </div>
        <div className="text-teal-400 text-lg font-normal leading-[30px] pt-[10px] cursor-pointer">Send us an email</div>
      </div>
      <div>
        <div className="text-gray-600 text-lg font-normal leading-[18px]">Follow Us</div>
        <div className='pt-[20px] cursor-pointer'>
          <Image
            width={23}
            height={23}
            alt='Twitter'
            src={twitter}
          />
        </div>
        <div className='pt-[15px] cursor-pointer'>
          <Image
            width={23}
            height={23}
            alt='Linkedin'
            src={linkedin}
          />
        </div>
        <div className='pt-[15px] cursor-pointer'>
          <Image
            width={23}
            height={23}
            alt='Instagram'
            src={instagram}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
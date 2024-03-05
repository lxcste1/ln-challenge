import { Article } from '@/types'
import React from 'react'

import GetSize from '@/hooks/GetSize';

import Image from 'next/image';

interface CardProps {
    info: Article;
  }

  const Card: React.FC<CardProps> = ({ info }) => {

    const size = GetSize();

    return (
        <div className={info.type == 'main' ? `flex md:flex-col-reverse flex-col mb-4 lg:w-[560px] md:w-[400px]` : `flex flex-col lg:w-[280px] md:w-[230px] ${info.module == 'focal-izq' && 'last:hidden'}`}>
            <div>
                {size.width < 767 ? 
                    <Image 
                        src={info.imgMobile}
                        alt={info.title}
                        width={360}
                        height={240}
                        className='w-full'
                        priority
                    /> :
                    <Image 
                        src={info.imgDesktop}
                        alt={info.title}
                        width={560}
                        height={373}
                        priority
                    />
                }
            </div>
            <div className='md:p-0 md:pb-8 p-4'>
                <h1 className={`${info.type == 'secondary' && `font-['suecaslab-medium'] md:text-[18px] leading-6 mt-3`} font-['suecaslab-bold'] md:text-[32px] text-[20px] leading-7 pb-3`}>
                    <span className='text-[#0250c9]'>{info.lead}. </span>
                    {info.title}
                </h1>
                {info.subtitle != '' ? <p className={`font-['Arial'] text-[16px] leading-6 py-3`}>{info.subtitle}</p> : ''}
                <b className={`font-['Arial'] text-[14px] leading-4`}>{info.author}</b>
            </div>
        </div>
    );
  };
  
  export default Card;

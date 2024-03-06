/**
 * Componente - Componente de Cards.
 * @author Lucas Tello
 * @created 06/03/2024
 */

import { Article } from '@/types'
import React from 'react'

import GetSize from '@/hooks/GetSize';

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    info: Article;
  }

  const Card: React.FC<CardProps> = ({ info }) => {

    // Variable para detectar el tipo de dispositivo
    const size = GetSize();

    return (
        <Link href={info.url} className={info.type == 'main' ? `flex md:flex-col-reverse flex-col mb-4 lg:w-[560px] md:w-[400px]` : `flex flex-col lg:w-[280px] md:w-[230px] mb-4 ${info.module == 'focal-izq' && 'last:hidden'}`}>
            <div className={info.type == 'main' ? `flex md:flex-col-reverse flex-col` : 'flex flex-col'}>
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
                <div className='md:p-0 md:pb-8 p-3'>
                    <h1 className={`${info.type == 'secondary' && `md:font-['suecaslab-medium'] font-['suecaslab-bold'] md:text-[18px] leading-6 md:mt-3 pb-2`} font-['suecaslab-bold'] text-[20px] leading-7 md:pb-3 ${info.type == 'main' && 'md:text-[32px]'}`}>
                        <span className='text-[#0250c9]'>{info.lead}. </span>
                        {info.title}
                    </h1>
                    {info.subtitle != '' ? <p className={`font-['Arial'] text-[16px] leading-6 py-3`}>{info.subtitle}</p> : ''}
                    <b className={`font-['Arial'] text-[14px] leading-4`}>{info.author}</b>
                </div>
            </div>
        </Link>
    );
  };
  
  export default Card;

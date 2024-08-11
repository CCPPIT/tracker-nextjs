import { defaultColor } from '@/constants/Colors'
import Image from 'next/image'
import React from 'react'

type Props = {}

const LogoAndName = (props: Props) => {
  return (
    <div className='flex  gap-2 items-center sm:justify-start justify-center'>
        <span className='text-2xl font-light flex items-center gap-2'>
            {/*** The Icon */}
            <div 
            style={{backgroundColor:defaultColor}}
            className='p-2 rounded-md'>
                <Image src={"/assets/logo/logoipsum-298.svg"} alt='logo' width={"42"} height={"42"}/>

            </div>
            {/*** The Name App */}
            <span className='font-bold text-customed'>
                Aora 

            </span>
            <span className='font-light'>
                Tracker

            </span>

        </span>
    </div>
  )
}

export default LogoAndName
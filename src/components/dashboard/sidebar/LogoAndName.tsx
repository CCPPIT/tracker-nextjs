import { defaultColor } from '@/constants/Colors'
import Image from 'next/image'
import React from 'react'

type Props = {}

const LogoAndName = (props: Props) => {
  return (
    <div className='flex  gap-2 items-center sm:justify-start justify-center'>
        <div className='text-2xl font-light flex items-center gap-2'>
            {/*** The Icon */}
            <div 
            style={{backgroundColor:defaultColor.default}}
            className='rounded-md ml-2'>
                <Image src={"/assets/logo/logoipsum-298.svg"} alt='logo' width={"34"} height={"34"} className='flex p-2 rounded-md  items-center bg-customed h-34 w-34' />

            </div>
            {/*** The Name App */}
            <span className='font-bold text-customed'>
                Aora 

            </span>
            <span className='font-light'>
                Tracker

            </span>

        </div>
    </div>
  )
}

export default LogoAndName
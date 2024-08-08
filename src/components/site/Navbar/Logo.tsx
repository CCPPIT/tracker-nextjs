import Image from 'next/image';
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
    const defaultColor="#d90429";
    const backgroundColorObject="";
  return (
    <div className='flex gap-2 items-center sm:justify-start justify-center'>
        <div className='text-2xl font-light flex items-center gap-2'>
            <div className='p-2 rounded-md' style={{backgroundColor:defaultColor}}>
                <Image src={"assets/logo/logoipsum-298.svg"} style={{color:"#ffffff"}} alt='Logo' width={"34"} height={"34"}/>


            </div>
            {/**The Name of the App */}
            <span style={{color:defaultColor}} className='font-bold text-black'>
                Aora

            </span>
            <span className='font-light'>
                Stacker

            </span>

        </div>
    </div>
  )
}

export default Logo
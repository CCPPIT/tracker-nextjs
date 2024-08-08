import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='flex flex-col mx-16 items-center mt-[100px] gap-6'>
        <span className='font-bold text-3xl text-center'>
        <span className='text-center text-sm sm:-w-[430px] w-[370px]'>Build the Aora that <span className='text-customed font-bold'>Aora!</span></span>
        </span>
        <p className='text-center text-sm sm:w-[430px] w-[370px]'>
            Feeling overwhelmed? Our easy-to-use Aora Tracker helps you
            take control of your day andachieve your global 
        </p>
        <Button variant={"ghost"} className={`block text-sm  font-light rounded-lg px-9 py-3 transition bg-customed focus:outline-none`}>
            {`Let's get started`}
        </Button>
    </div>
  )
}

export default HeroSection
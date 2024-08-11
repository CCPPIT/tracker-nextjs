import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const DarkMode = (props: Props) => {
  return (
    <div className='bg-slate-50 w-[90px] relative rounded-3xl flex'>
        <div className='h-full w-[45px] z-40 flex justify-center items-center'>
            <FontAwesomeIcon 
            icon={faSun}
            width={20}
            height={20}
            className='text-customed'
            />
        </div>
        <div className='h-full w-[45px] z-40 opacity-100 flex justify-center items-center'>
            <FontAwesomeIcon 
            icon={faMoon}
            width={20}
            height={20}
            className='text-gray-300'
            />
        </div>
        <div className='w-[38px] absolute h-[38px] top-1 left-[4px] rounded-full bg-white'></div>
    </div>
  )
}

export default DarkMode
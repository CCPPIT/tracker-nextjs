import { darkModeColor, defaultColor } from '@/constants/Colors'
import useGlobalContextProvider from '@/context/contextApi'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const AllAoraSearchBar = (props: Props) => {
  const {darkModeObject:{darkModeItems}}=useGlobalContextProvider();
  return (
    <div className='w-[75%]'>
        <div 
        style={{backgroundColor:darkModeItems ?darkModeColor.backgroundSlat:defaultColor.backgroundSlat}}
        className='flex gap-3 items-center bg-slate-50 p-3  rounded-3xl'>
            <FontAwesomeIcon width={20} height={20} icon={faSearch} className='text-gray-300'/>
            <input
            style={{backgroundColor:darkModeItems?darkModeColor.backgroundSlat:defaultColor.backgroundSlat}}
            placeholder='Search...'
            className={`outline-none text-[14px] font-light bg-slate-50 w-full`}
            />

        </div>
    </div>
  )
}

export default AllAoraSearchBar
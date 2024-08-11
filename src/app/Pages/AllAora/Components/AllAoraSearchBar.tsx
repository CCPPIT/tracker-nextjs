import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const AllAoraSearchBar = (props: Props) => {
  return (
    <div className='w-[75%]'>
        <div className='flex gap-3 items-center p-3 bg-slate-50 rounded-3xl'>
            <FontAwesomeIcon width={20} height={20} icon={faSearch} className='text-gray-300'/>
            <input
            placeholder='Search...'
            className={`outline-none text-[14px] font-light bg-slate-50 w-full`}
            />

        </div>
    </div>
  )
}

export default AllAoraSearchBar
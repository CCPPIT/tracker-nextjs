"use client"
import React from 'react'
import AllAoraToBar from './Components/AllAoraToBar'
import AllAoraRightSideBar from './Components/AllAoraRightSideBar'
import AoraContainer from './Components/AoraContainer/AoraContainer'
import AoraComplated from './Components/AoraComplated'
import AoraWindow from './Components/AoraWindow'
import useGlobalContextProvider from '@/context/contextApi'
import { darkModeColor, defaultColor } from '@/constants/Colors'

type Props = {}

const AllAora = (props: Props) => {
  const {darkModeObject:{darkModeItems}}=useGlobalContextProvider();
  return (
    <div
     className='max-lg:flex-col w-full flex flex-grow gap-0 relative'>
      <AoraWindow/>
        <div className='flex-col flex-grow m-3'>
           <AllAoraToBar/>
           <AoraContainer/>
           <AoraComplated/>


        </div>
        <AllAoraRightSideBar/>
    </div>
  )
}

export default AllAora


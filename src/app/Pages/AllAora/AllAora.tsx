"use client"
import React from 'react'
import AllAoraToBar from './Components/AllAoraToBar'
import AllAoraRightSideBar from './Components/AllAoraRightSideBar'
import AoraContainer from './Components/AoraContainer/AoraContainer'
import AoraComplated from './Components/AoraComplated'

type Props = {}

const AllAora = (props: Props) => {
  return (
    <div className='w-full flex'>
        <div className='w-[80%] m-5'>
           <AllAoraToBar/>
           <AoraContainer/>
           <AoraComplated/>


        </div>
        <AllAoraRightSideBar/>
    </div>
  )
}

export default AllAora


import React from 'react'
import UserProfile from './RightSidBar/UserProfile'
import MainStatistics from './RightSidBar/MainStatistics'
import DateCalendar from './RightSidBar/DateCalendar'
import useGlobalContextProvider from '@/context/contextApi'
import { darkModeColor, defaultColor } from '@/constants/Colors'

type Props = {}

const AllAoraRightSideBar = (props: Props) => {
  const {darkModeObject:{darkModeItems}}=useGlobalContextProvider();
  return (
    <div 
    style={{
      color:darkModeItems?darkModeColor.textColor:defaultColor.textColor,
      backgroundColor:darkModeItems?darkModeColor.background:defaultColor.background
    }}
    className='flex flex-col items-center-center rounded-lg m-3 p-2 '>
      <UserProfile/>
      <MainStatistics/>
      <DateCalendar/>

    </div>

  )
}

export default AllAoraRightSideBar
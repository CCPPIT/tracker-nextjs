import React from 'react'
import UserProfile from './RightSidBar/UserProfile'
import MainStatistics from './RightSidBar/MainStatistics'
import DateCalendar from './RightSidBar/DateCalendar'

type Props = {}

const AllAoraRightSideBar = (props: Props) => {
  return (
    <div className='w-[30%] flex flex-col items-center bg-white'>
      <UserProfile/>
      <MainStatistics/>
      <DateCalendar/>

    </div>

  )
}

export default AllAoraRightSideBar
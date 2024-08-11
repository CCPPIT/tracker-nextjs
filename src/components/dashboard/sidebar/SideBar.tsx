import React from 'react'
import LogoAndName from './LogoAndName'
import MenuSelection from './MenuSelection'
import LogoutSection from './LogoutSection'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className='flex-grow border flex flex-col bg-white min-h-screen p-10'>
       
        <LogoAndName/>
        <MenuSelection/>
        <LogoutSection/>
    </div>
  )
}

export default SideBar
import React, { useEffect, useRef } from 'react'
import LogoAndName from './LogoAndName'
import MenuSelection from './MenuSelection'
import LogoutSection from './LogoutSection'
import useGlobalContextProvider from '@/context/contextApi'
import { darkModeColor, defaultColor } from '@/constants/Colors'
 
type Props = {}

const SideBar = (props: Props) => {
  const {openSideBarObject:{setOpenSideBar,openSideBar},darkModeObject:{darkModeItems}}=useGlobalContextProvider();
  const sideBarRef=useRef<HTMLDivElement>(null)
  useEffect(()=>{
    function handleOutsideBar(event:MouseEvent){
      if(!sideBarRef.current?.contains(event.target as Node)){
        setOpenSideBar(false);
      }
    }
    document.addEventListener("click",handleOutsideBar);
    return ()=>{
      document.removeEventListener("click",handleOutsideBar)
    }
  },[openSideBar])
  return (
    <div
    style={{
      color:darkModeItems ? darkModeColor.textColor : defaultColor.textColor,
      backgroundColor: darkModeItems ? darkModeColor.background:defaultColor.background
    }}
     ref={sideBarRef} className={`${!openSideBar? "max-xl:hidden" : "fixed shadow-lg" }  flex-grow z-50 p-10  flex-col bg-white min-h-screen `}>
       
        <LogoAndName/>
        <MenuSelection/>
        <LogoutSection/>
    </div>
  )
}

export default SideBar
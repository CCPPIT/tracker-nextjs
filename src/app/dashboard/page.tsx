"use client"
import React, { useEffect, useState } from 'react'

import NavBardash from '@/components/dashboard/navbar/NavBardash'
import useGlobalContextProvider from '@/context/contextApi'
import { menuItemType } from '@/Types/MenuItemType'
import SideBar from '@/components/dashboard/sidebar/SideBar'
import AllAora from '../Pages/AllAora/AllAora'
import Statistics from '../Pages/Statistics/Statistics'
import Areas from '../Pages/Areas/Areas';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { darkModeColor, defaultColor } from '@/constants/Colors'



type Props = {}

const DashBoard = (props: Props) => {
 
  const {menuItemsObject:{menuItems},darkModeObject:{darkModeItems}}=useGlobalContextProvider();
  const [selectedMenu,setSelectedMenue]=useState<menuItemType | null>(null);
  let selectComponent = null;

  useEffect(()=>{
    menuItems.map((singleItem)=>{
      if(singleItem.isSelected){
        setSelectedMenue(singleItem)
      }
    });



  },[menuItems])
  switch (selectedMenu?.name){
    case "AllAora":
      selectComponent=<AllAora/>;
      break;
      case "Statistics":
        selectComponent=<Statistics/>;
        break;
      case "Areas":
        selectComponent=<Areas/>
        break;
        case "All Areas":
          break;

  }
  return (
    <div
    style={{backgroundColor:darkModeItems?darkModeColor.backgroundSlat:defaultColor.backgroundSlat}}
     className='flex'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>

      <SideBar/>
      {selectComponent}
      <BlackSoftLayer/>
      </LocalizationProvider>




     
    


        <main className=''>
         {/* {selectComponent} */}
           

            
              
           
            </main> 
           
            </div>
  )
}

export default DashBoard
function BlackSoftLayer(){
  const {openSideBarObject:{openSideBar}}=useGlobalContextProvider();
  return(
    <div className={`w-full h-full bg-black fixed top-0 left-0 opacity-20 z-40 ${openSideBar ? "fixed" : "hidden"}`}>

    </div>
  )
}
"use client"
import React, { useEffect, useState } from 'react'

import NavBardash from '@/components/dashboard/navbar/NavBardash'
import useGlobalContextProvider from '@/context/contextApi'
import { menuItemType } from '@/Types/MenuItemType'
import SideBar from '@/components/dashboard/sidebar/SideBar'
import AllAora from '../Pages/AllAora/AllAora'
import Statistics from '../Pages/Statistics/Statistics'
import Areas from '../Pages/Areas/Areas'



type Props = {}

const DashBoard = (props: Props) => {
 
  const {menuItemsObject:{menuItems}}=useGlobalContextProvider();
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
    <div className='flex bg-slate-50'>
      <SideBar/>
      {selectComponent}



     
    


        <main className=''>
         {/* {selectComponent} */}
           

            
              
           
            </main> 
           
            </div>
  )
}

export default DashBoard
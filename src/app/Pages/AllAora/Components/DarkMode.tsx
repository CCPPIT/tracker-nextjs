"use client"
import { darkModeColor, defaultColor } from '@/constants/Colors'
import useGlobalContextProvider from '@/context/contextApi'
import { DarkModeItem } from '@/Types/DarkModeItem'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

type Props = {}

const DarkMode = (props: Props) => {
  const {darkModeObject:{isDarkMode,setIsDarkMode,darkModeItems,setDarkModeItems}}=useGlobalContextProvider();
  // const [darkModeItems,setDarkModeItems]=useState<boolean>(
   
  // );
  function handleClickItem(singleItemIndex:number){
    const upatedDarkModeItems=isDarkMode.map((darkModeItme,index)=>{
      if(singleItemIndex===index){
        return{...darkModeItme,isSelected:true}
      }
      return {...darkModeItme,isSelected:false}
    })
    setIsDarkMode(upatedDarkModeItems)
  }
  useEffect(()=>{
    isDarkMode.forEach((singleItem)=>{
      if(singleItem.id === 1 && singleItem.isSelected){
        setDarkModeItems(false)
      }
      if(singleItem.id===2&&singleItem.isSelected){
        setDarkModeItems(true)
      }
    })
  },[isDarkMode])
  console.log(darkModeItems)
 

 
  return (
    <div
    style={{
      backgroundColor:darkModeItems ?darkModeColor.backgroundSlat:defaultColor.backgroundSlat
    }}
     className=' w-[90px] relative rounded-3xl flex'>
      {isDarkMode.map((singleItems,index)=>(
        <div
        key={index}
        onClick={()=>handleClickItem(index)}
         className={`h-full w-[45px] z-40 flex justify-center items-center`}>
        <FontAwesomeIcon 
        icon={singleItems.icon}
        width={20}
        height={20}
        className={`${singleItems.isSelected? "text-customed" : "text-gray-300"} cursor-pointer`}
        />

       
    </div>

  
    

      ))}
      <div
      style={{backgroundColor:darkModeItems?darkModeColor.background:defaultColor.background}}
       className={` absolute h-[38px] w-[38px] top-1 transform ${darkModeItems?"translate-x-[48px]" : "translate-x-1"} rounded-full bg-white transition-all`}> </div> 

    
        
    </div>
  )
}

export default DarkMode
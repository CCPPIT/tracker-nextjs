import useGlobalContextProvider from '@/context/contextApi'
import React, { useState } from 'react'
import { IconsData } from './IconData';
import { darkModeColor, defaultColor } from '@/constants/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    openIconWindow:boolean,
    iconSelected:IconProp
    setIconSlected:React.Dispatch<React.SetStateAction<IconProp>>;
    setOpenIconWindow:React.Dispatch<React.SetStateAction<boolean>>
    
}

const IconWindow = ({openIconWindow,setOpenIconWindow,iconSelected,setIconSlected}: Props) => {
    const {darkModeObject:{darkModeItems},}=useGlobalContextProvider();
    const [allIcons,setAllIcons]=useState(IconsData);
    console.log(openIconWindow)
  return (
    <div
    style={{backgroundColor:darkModeItems?darkModeColor.background:"white",
        color:darkModeItems? darkModeColor.textColor : "black"

    }}
     className={`z-50 w-[80%] left-1/2 transform -translate-x-1/2 p-4 rounded-md border flex flex-col gap-6 shadow-md ${openIconWindow ? "absolute" : "hidden"}`}>
       <FontAwesomeIcon
       onClick={()=>{
        setOpenIconWindow(false)
       }}
        icon={faClose}
        height={20}
        width={20}
        className='  absolute top-8 right-4 text-gray-300 cursor-pointer'
        />
        <span className='font-bold text-lg'>Choose Your Icon</span>
        <div className="border border-gray-200 p-5 flex flex-wrap gap-4 items-center rounded-md mb-5">
            {allIcons.map((icons,index)=>(
                <FontAwesomeIcon
                key={index}
                icon={icons.faIcon}
                height={50}
                width={50}
                className={`border p-2 border-gray-300 rounded-md text-xl cursor-pointer hover:text-customed hover:border-customed`}
                 onClick={()=>{
                    setIconSlected(icons.faIcon)

                    setOpenIconWindow(false)
                 }}
                />
            ))}

        </div>
    </div>
  )
}

export default IconWindow
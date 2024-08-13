"use client"
import { GlobalContextType } from "@/Types/GlobalContextType";
import { menuItemType } from "@/Types/MenuItemType";
import { createContext, useContext, useState } from "react";
import {faChartSimple,faLayerGroup,faRectangleList,faList, faSun, faMoon}from "@fortawesome/free-solid-svg-icons"
import { DarkModeItem } from "@/Types/DarkModeItem";

const GlobalContext=createContext<GlobalContextType>({
    menuItemsObject:{
        menuItems:[],
        setMenuItems:()=>{}
    },
    openSideBarObject:{
        openSideBar:false,
        setOpenSideBar:()=>{}
    },
    darkModeObject:{
        isDarkMode:[],
        setIsDarkMode:()=>{},
        darkModeItems:false,
        setDarkModeItems:()=>{}
    },
    AoraWindowObject:{
        openAoraWindow:false,
        setOpenAoraWindow:()=>{}
    }
});
export const GlobalContextProvider=({children}:{children:React.ReactNode})=>{
    const [menuItems,setMenuItems]=useState<menuItemType[]>([
        {name:"AllAora",isSelected:true, icon:faRectangleList},
        {name:"Statistics",isSelected:false,icon:faChartSimple},
        {name:"Areas",isSelected:false,icon:faLayerGroup}

    ]);
    const [openSideBar,setOpenSideBar]=useState(false);
    const [darkModeItems,setDarkModeItems]=useState(false)
    const[openAoraWindow,setOpenAoraWindow]=useState(false);
    const [isDarkMode,setIsDarkMode]=useState<DarkModeItem[]>([
        {id:1,icon:faSun,isSelected:true},
        {id:2,icon:faMoon,isSelected:false}
    ])
    return(
        <GlobalContext.Provider value={{menuItemsObject:{menuItems,setMenuItems},openSideBarObject:{openSideBar,setOpenSideBar}
        ,darkModeObject:{isDarkMode,setIsDarkMode,darkModeItems,setDarkModeItems},
        AoraWindowObject:{openAoraWindow,setOpenAoraWindow}
        }}>
            {children}

        </GlobalContext.Provider>
    )
    
}
 export const  useGlobalContextProvider=()=>{
    const context=useContext(GlobalContext);
    if(!context){
        throw new Error("useGlobalContext must bee with a GlobalContextProvider")
    }
    return context
}
export default useGlobalContextProvider;

"use client"
import { GlobalContextType } from "@/Types/GlobalContextType";
import { menuItemType } from "@/Types/MenuItemType";
import { createContext, useContext, useState } from "react";
import {faChartSimple,faLayerGroup,faRectangleList,faList}from "@fortawesome/free-solid-svg-icons"

const GlobalContext=createContext<GlobalContextType>({
    menuItemsObject:{
        menuItems:[],
        setMenuItems:()=>{}
    }
});
export const GlobalContextProvider=({children}:{children:React.ReactNode})=>{
    const [menuItems,setMenuItems]=useState<menuItemType[]>([
        {name:"AllAora",isSelected:true, icon:faRectangleList},
        {name:"Statistics",isSelected:false,icon:faChartSimple},
        {name:"Areas",isSelected:false,icon:faLayerGroup}

    ]);
    return(
        <GlobalContext.Provider value={{menuItemsObject:{menuItems,setMenuItems}}}>
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

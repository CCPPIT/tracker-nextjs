import React from "react"
import { menuItemType } from "./MenuItemType"
import { DarkModeItem } from "./DarkModeItem"

export type GlobalContextType={
    menuItemsObject:{
        menuItems:menuItemType[],
        setMenuItems:React.Dispatch<React.SetStateAction<menuItemType[]>>
    },
    openSideBarObject:{
        openSideBar:boolean,
        setOpenSideBar:React.Dispatch<React.SetStateAction<boolean>>
    },
    darkModeObject:{
        isDarkMode:DarkModeItem[],
        darkModeItems:boolean,
        setDarkModeItems:React.Dispatch<React.SetStateAction<boolean>>;
        setIsDarkMode:React.Dispatch<React.SetStateAction<DarkModeItem[]>>
    },
    AoraWindowObject:{
        openAoraWindow:boolean,
        setOpenAoraWindow:React.Dispatch<React.SetStateAction<boolean>>
    },
    OpenIconWindowObject:{
        openIconWindow:boolean,
        setOpenIconWindow:React.Dispatch<React.SetStateAction<boolean>>
    }

}

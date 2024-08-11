import { menuItemType } from "./MenuItemType"

export type GlobalContextType={
    menuItemsObject:{
        menuItems:menuItemType[],
        setMenuItems:React.Dispatch<React.SetStateAction<menuItemType[]>>
    }

}

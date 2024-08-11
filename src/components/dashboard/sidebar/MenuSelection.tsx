"use client"
import useGlobalContextProvider  from '@/context/contextApi'
import { menuItemType } from '@/Types/MenuItemType'
import React from 'react'
import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import Link from 'next/link'

type Props = {}

const MenuSelection = (props: Props) => {
    const {menuItemsObject:{menuItems,setMenuItems}}=useGlobalContextProvider();
  return (
    
    <div className='mt-[180px]'>
        {menuItems.map((items,index)=>(
            <div key={index}>
                <SingleMenueItem menuItemProp={items}/>
            </div>
        ))}
    </div>
  )
}

export default MenuSelection
function SingleMenueItem({menuItemProp}:{menuItemProp:menuItemType}){
    const {menuItemsObject:{menuItems,setMenuItems}}=useGlobalContextProvider();
    function handleClickedItem(){
        const copyMenuItems=menuItems.map((menuItem)=>{
            if(menuItemProp.name===menuItem.name){
                return{...menuItem,isSelected:true}
            }else{
                return{...menuItem,isSelected:false}
            }
        });
        setMenuItems(copyMenuItems)

       
    }
    return(
        <div
        onClick={handleClickedItem}
         className={`flex gap-2 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-36 select-none
        ${menuItemProp.isSelected ? "bg-customed transition-all text-white":"hover:text-customed"}`}>
            <FontAwesomeIcon icon={menuItemProp.icon}
            width={20}
            height={20}
            />
           
            {menuItemProp.name}
            
            

        
            
 

        </div>
    )
}
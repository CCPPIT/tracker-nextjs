import { darkModeColor, defaultColor } from '@/constants/Colors';
import useGlobalContextProvider from '@/context/contextApi'
import { AoraType } from '@/Types/AoraType';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useEffect, useRef, useState } from 'react'
import { setTimeout } from 'timers';

type Props = {}
const HeaderMemo=memo(Header)
const InputNameAndIconButtonMemo=memo(InputNameAndIconButton)

const AoraWindow = (props: Props) => {
    const {darkModeObject:darkModeItems,AoraWindowObject:{openAoraWindow}}=useGlobalContextProvider();
    const [aroaItem,setAoraItem]=useState<AoraType>({
        _id:"",name:""
        
    });
    const onUpdateAoraName=(inputText:string)=>{
        // Creating a shallow copy of the aora
        const copyAoraItem={...aroaItem};
        // Modifying the name property based on the inputText
        copyAoraItem.name=inputText;
        // Updating the Aora item state
        setAoraItem(copyAoraItem);


    }
  return (
    <div 
    style={{backgroundColor:darkModeItems?darkModeColor.background :defaultColor.background}}
   
    
    className={`top-[3%] left-1/2 transform  -translate-x-1/2 w-[80%] z-50 p-10 rounded-md shadow-md ${openAoraWindow ? "absolute" : "hidden"}`}>
        <HeaderMemo/>
        <InputNameAndIconButtonMemo
        aoraName={aroaItem.name}
        onUpdateAoraName={onUpdateAoraName}
        />
        <SaveButton aora={aroaItem}/>

    </div>
  )
}

export default AoraWindow
function Header(){
    const {AoraWindowObject:{openAoraWindow,setOpenAoraWindow},darkModeObject:{darkModeItems}}=useGlobalContextProvider();
    return(
       

       
        <div
      
         className='flex justify-between items-center'>
            <span className='font-bold text-xl'>Add New Aora</span>
            <FontAwesomeIcon icon={faClose}
            onClick={()=>setOpenAoraWindow(false)}
            className='text-gray-400 cursor-pointer'
            />

        </div>
        
    )
}
function InputNameAndIconButton({onUpdateAoraName,aoraName}:{aoraName:string,onUpdateAoraName:(inputText:string)=>void}){
    const inputRef=useRef<HTMLInputElement>(null);
    const {AoraWindowObject:{openAoraWindow},darkModeObject:{darkModeItems}}=useGlobalContextProvider();
    function updateInputAora(event:React.ChangeEvent<HTMLInputElement>){
        onUpdateAoraName(event.target.value);
    }
    useEffect(()=>{
     
        // when the window is closed empty the input field bg using thecallback function
        if(!openAoraWindow){
            onUpdateAoraName("")
        }
        setTimeout(()=>{
            inputRef.current?.focus();
        },500)
    },[openAoraWindow])
    return(
        <div 
        className='flex flex-col gap-2 mt-10 px-3'
        >
            <span className='opacity-80 font-semibold'>Aora Name:</span>
            <div className='flex gap-4 justify-between items-center'>
                <input
                style={{backgroundColor:darkModeItems? darkModeColor.background : "white",color:darkModeItems?darkModeColor.textColor : "black"}}
                ref={inputRef}
                value={aoraName}
                onChange={(event)=>updateInputAora(event)}
                placeholder='Type a name for the aora'
                className={`border w-full border-gray-200 outline-none p-4 rounded-md text-[13px]`}
                />
                <FontAwesomeIcon icon={faClose}
                height={16}
                width={20}
                className='p-2 mt-[1px] rounded-md text-white cursor-pointer bg-customed'
                />
            </div>

        </div>
    )

}
function SaveButton({aora}:{aora:AoraType}){
    return(
        <div className='w-full flex justify-center mt-9'>
            <button 
            onClick={()=>{
                console.log(aora)
            }}
            className='bg-customed p-4 w-[98%] rounded-md text-white
            '>
                Add a Aora
            </button>

        </div>
    )
}
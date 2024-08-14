import { darkModeColor, defaultColor } from '@/constants/Colors';
import useGlobalContextProvider from '@/context/contextApi'
import { AoraType, DayOption } from '@/Types/AoraType';
import { faClose, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useEffect, useRef, useState } from 'react'
import { setTimeout } from 'timers';
import IconWindow from './IconWindow/IconWindow';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { isSet } from 'util/types';

type Props = {}
const HeaderMemo=memo(Header)
const InputNameAndIconButtonMemo=memo(InputNameAndIconButton)
type RepeatOption={
    name:string,
    isSelected:boolean
}


const AoraWindow = (props: Props) => {
    const {darkModeObject:darkModeItems,AoraWindowObject:{openAoraWindow},}=useGlobalContextProvider();

    const [openIconWindow,setOpenIconWindow]=useState<boolean>(false)
    const [aroaItem,setAoraItem]=useState<AoraType>({
        _id:"",name:"",
        icon:faQuestion,
        frequency:[{type:"Daily",days:["M"],number:1}]
        
    });
    const [iconSelected,setIconSelected]=useState<IconProp>(aroaItem.icon);
    const onUpdateAoraName=(inputText:string)=>{
        // Creating a shallow copy of the aora
        const copyAoraItem={...aroaItem};
        // Modifying the name property based on the inputText
        copyAoraItem.name=inputText;''
        // Updating the Aora item state
        setAoraItem(copyAoraItem);
    }
    // This callback function from the Repeat functional Component update the aora Item object's frequencyType property
    function chanageRepeatOption(repeatOptions:RepeatOption[]){
        // First we filter only the element we seelected
        const filterIsSelected=repeatOptions.filter((singleOption)=>singleOption.isSelected);
        // we extract only the name of the aora object
        const nameOfSelectedOption=filterIsSelected[0].name;
        // we creating a shallow coppy of the aora item
        const copyAoraItem={...aroaItem}
        // Update the type of the frequency property
        copyAoraItem.frequency[0].type=nameOfSelectedOption;
        //Update the Aora Item to update the ui
        setAoraItem(copyAoraItem)
    }
    // 
    function changeDaysOption(allDays:DayOption[]){
        const selectedDays=allDays.filter((singleDay)=>singleDay.isSelected)
        .map((day)=>day.name);
        // We creating a shallow coppy of the aora item
        const copyAoraItem={...aroaItem};
        // Update the type of the frequency property
        copyAoraItem.frequency[0].days=selectedDays;
        // Update the aora item to update ui
        setAoraItem(copyAoraItem)

    }
    function changeWeekOption(weeks:number){
        // creating a shallow copy the aora item 
        const copyAoraItem={...aroaItem}
        //update the type of the frequency property
        copyAoraItem.frequency[0].number=weeks
        // update the aora item to update the ui
        setAoraItem(copyAoraItem)

    }
    useEffect(()=>{
        const copyAoraItem={...aroaItem};
        copyAoraItem.icon=iconSelected;
        setAoraItem(copyAoraItem)
    },[iconSelected])
  return (
    <div 
    style={{backgroundColor:darkModeItems?darkModeColor.background : "white",
        color:darkModeItems? darkModeColor.textColor : "black"

    }}
     
    
    className={`top-[3%] left-1/2 transform  -translate-x-1/2  items-center w-[80%] z-50 p-10 rounded-md shadow-md  bg-white ${openAoraWindow?"absolute" : "hidden"}`}>
        <IconWindow 
        openIconWindow={openIconWindow}
        setOpenIconWindow={setOpenIconWindow}
        iconSelected={iconSelected}
        setIconSlected={setIconSelected}
        />
        <Header/>
        <InputNameAndIconButton
        aoraName={aroaItem.name}
        onUpdateAoraName={onUpdateAoraName}
        iconSelected={iconSelected}
        setOpenIconWindow={setOpenIconWindow}
        />
        <Repeat onChangeOption={chanageRepeatOption}
        onChangeDaysOption={changeDaysOption}
        onChangeWeekOption={changeWeekOption}
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
function InputNameAndIconButton({onUpdateAoraName,aoraName,iconSelected,setOpenIconWindow}:{aoraName:string,onUpdateAoraName:(inputText:string)=>void,
    setOpenIconWindow:React.Dispatch<React.SetStateAction<boolean>>,
    iconSelected:IconProp
}){
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
    },[openAoraWindow]);
    useEffect(()=>{
        inputRef.current?.focus();
    },[iconSelected])
    return(
        <div 
        //  style={{backgroundColor:darkModeItems?darkModeColor.background:"white",
        //     color:darkModeItems? darkModeColor.textColor : "black"}}
        className='flex flex-col gap-2 mt-10 px-3'
        >
            <span className='opacity-80 font-semibold'>Aora Name:</span>
            <div className='flex gap-4 justify-between items-center'>
                <input
                style={{backgroundColor: darkModeItems ? darkModeColor.background : "white",color: darkModeItems?darkModeColor.textColor : "black"}}
                ref={inputRef}
                value={aoraName}
                onChange={(event)=>updateInputAora(event)}
                placeholder='Type a name for the aora'
                className={`border w-full border-gray-200 outline-none p-4 rounded-md text-[13px]`}
                />
                <FontAwesomeIcon icon={iconSelected}
                onClick={()=>setOpenIconWindow(true)}
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
function Repeat({onChangeOption,onChangeDaysOption,onChangeWeekOption}:{onChangeOption:(repeatOptions:RepeatOption[])=>void,
    onChangeDaysOption:(allDays:DayOption[])=>void,
    onChangeWeekOption:(weeks:number)=>void
}){
    
    const {darkModeObject:{darkModeItems}}=useGlobalContextProvider();
    const [repeatOptions,setRepeatOptions]=useState<RepeatOption[]>([
        {name:"Daily",isSelected:true},
        {name:"Weekly",isSelected:false}
    ]);
    const days:DayOption[]=[
        { id:1,name:"M",isSelected:true},
        { id:2,name:"T",isSelected:false},
        { id:3,name:"W",isSelected:false},
        { id:4,name:"T",isSelected:false},
        { id:5,name:"F",isSelected:false},
        { id:6,name:"S",isSelected:false},
        { id:7,name:"S",isSelected:false},

    ];
    const [allDays,setAllDays]=useState<DayOption[]>(days)
    const [weeks,setWeeks]=useState<number>(1);
    const [nameOfSelectedOption,setNameOfSelectedOption]=useState("")
    function changeOption(indexClick:number){
        const updateRepeatOPtions=repeatOptions.map((singleOption,index)=>{
            if(index===indexClick){
                return{...singleOption,isSelected:true}
            }
            return {...singleOption,isSelected:false}
           

        })
        setRepeatOptions(updateRepeatOPtions);
        onChangeOption(updateRepeatOPtions)

    }
       useEffect(()=>{
    // Trigger the callback function to pass in it the allDays array
    onChangeDaysOption(allDays)
    
    
    },[allDays])
    useEffect(()=>{
        onChangeWeekOption(weeks)
    },[weeks])
    useEffect(()=>{
    // this get name of the selection option and update it in the nameOfSeleectionOption varible
    const getNameOptionSelected=repeatOptions.filter((singleOption)=>singleOption.isSelected)[0].name;

    setNameOfSelectedOption(getNameOptionSelected)
    },[repeatOptions])
    return(
        <div className='flex flex-col gap-2 mt-10 px-3'>
            <span className='font-semibold text-[17px]'>Repeat</span>
            <div className='flex gap-4 mt-2 items-center'>
                {repeatOptions.map((singleOption,index)=>(
                    <button
                    key={index}
                    style={{
                        color:!singleOption.isSelected?!darkModeItems?defaultColor.default: darkModeColor.textColor:"",
                        backgroundColor: singleOption.isSelected?defaultColor.default:!darkModeItems?defaultColor[100]:defaultColor[50]
                    }}
                    onClick={()=>changeOption(index)}
                    className='p-2 px-3 rounded-md text-white cursor-pointer'
                    >
                        {singleOption.name}
                    </button>
                ))}

            </div>
            {/*** WeeklyOption week={week} */}
            {nameOfSelectedOption==="Daily"?(
           <DailyOption allDays={allDays} setAllDays={setAllDays}/>

            ):( <WeeklyOption weeks={weeks} setWeeks={setWeeks}/>)}
           
        </div>
    )
}
function DailyOption({allDays,setAllDays}:{allDays:DayOption[],setAllDays:React.Dispatch<React.SetStateAction<DayOption[]>>}){
    const {darkModeObject:{darkModeItems}}=useGlobalContextProvider()
    function selectedDay(singlDayIndex:number){
        const selectedCount:number=allDays.filter((singleDay)=>singleDay.isSelected).length;

        const updateSelectedDay=allDays.map((singleDay,index)=>{
            if(selectedCount===1&&singleDay.isSelected===true&&index===singlDayIndex){
                return singleDay
            }
            return index===singlDayIndex
            ?{...singleDay,isSelected:!singleDay.isSelected}
            :singleDay
          
        });
        setAllDays(updateSelectedDay)
        

    }
 
    return(
        <div className='mt-5 flex flex-col gap-4'>
            <span className='font-medium opacity-85'>On These Days</span>
            <div className='flex gap-3 w-full'>
                {allDays.map((singlDay,singleIndexDay)=>(
                    <span 
                    key={singleIndexDay}
                    onClick={()=>selectedDay(singleIndexDay)}
                    style={{
                        color:!singlDay.isSelected?!darkModeItems?defaultColor.default
                        :darkModeColor.textColor
                        :"",
                        backgroundColor:singlDay.isSelected?defaultColor.default
                        :!darkModeItems?defaultColor[100]
                        :defaultColor[50]
                    }}
                    className={`p-2 px-3 w-11 text-center rounded-md select-none cursor-pointer ${
                        singlDay.isSelected ? "text-white" :"text-gray-300"
                    }`}
                    >
                        {singlDay.name}

                    </span>

                )

                )}

            </div>
            {/**  */}

        </div>
    )

}
function WeeklyOption({weeks,setWeeks}:{
weeks:number,
setWeeks:React.Dispatch<React.SetStateAction<number>>
}){
const {darkModeObject:{darkModeItems}}=useGlobalContextProvider();
function updateCounter(option:string){
if(option==='up'){
setWeeks((prev)=>prev<7?prev+1:7)
}
if(option==="down"){
setWeeks((prev)=>prev>1?prev-1:1)
}
}
return(
<div className='mt-7 flex gap-20'>
<div className='flex flex-col gap-2'>
<span className='font-semibold'>Frequency</span>
<span className='text-sm font-light text-gray-400'>{weeks} times a week</span>
</div>
<div className='flex items-center justify-center'>
<button
onClick={()=>updateCounter("down")}
style={{backgroundColor:!darkModeItems?defaultColor[100]:defaultColor[50],
color:!darkModeItems?defaultColor.default:darkModeColor.textColor

}}
className='p-3 w-10 rounded-md text-white'
>
-
</button>
<span className='p-4 px-5 select-none'>{weeks}</span>
<button
onClick={()=>updateCounter("up")}
style={{backgroundColor:!darkModeItems?defaultColor[100]:defaultColor[50],
color:!darkModeItems?defaultColor.default:darkModeColor.textColor

}}
className='p-3 w-10 rounded-md text-white'
>
+
</button>
</div>

</div>
)
}
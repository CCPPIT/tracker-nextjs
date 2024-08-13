"use client"
import React from 'react'
import { darkModeColor, defaultColor } from '@/constants/Colors'

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import useGlobalContextProvider from '@/context/contextApi';



type Props = {}

const DateCalendarSid = (props: Props) => {
  const {darkModeObject:{darkModeItems}}=useGlobalContextProvider();
  return (
    <div
    style={{
      backgroundColor:darkModeItems?darkModeColor.backgroundSlat:defaultColor.backgroundSlat
    }}
     className='flex flex-col justify-center items-center mx-4  gap-6 mt-10 bg-slate-50 rounded-xl p-5 pt-7'>
      {/* // <div className='flex mx-4 flex-col gap-6 bg-slate-50 rounded-xl p-5 justify-center items-center mt-20'> */}


    
         <DateCalendar  
         sx={{"& .MuiPickersDay-root":{
          color:darkModeItems?darkModeColor.textColor:defaultColor.textColor,


            "&.Mui-selected":{
                backgroundColor:defaultColor.default,
                color:"white"
                
               
            }
           },
           "& .MuiPickersYear-yearButton.Mui-selected":{
            color:darkModeItems?darkModeColor.textColor:defaultColor.textColor,
            
           },
          "& .Mui-selected":{
            backgroundColor:defaultColor.default,
            color:"red"
            
          }
           
          
        }}
        
         />
      
    


       
    </div>
  )
}

export default DateCalendarSid
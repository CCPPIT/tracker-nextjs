import React from 'react'
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar"
import { defaultColor } from '@/constants/Colors'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';



type Props = {}

const DateCalendarSid = (props: Props) => {
  return (
    <div className='flex justify-center items-center mx-4 gap-6 mt-10 bg-slate-50 rounded-xl p-5 pt-7'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
       sx={{"& .MuiPickersDay-root":{
        "&.Mui-selected":{
            backgroundColor:defaultColor.default
           
        }
       },
       "& .MuiPickersYear-yearButton.Mui-selected":{
        backgroundColor:defaultColor.default
       }
    }}
       />
       
  
        </LocalizationProvider>
       
    </div>
  )
}

export default DateCalendarSid
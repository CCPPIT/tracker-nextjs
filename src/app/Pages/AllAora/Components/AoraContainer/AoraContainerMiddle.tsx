import { defaultColor } from '@/constants/Colors'
import {  Checkbox, IconButton, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {}

const AoraContainerMiddle = (props: Props) => {
  return (
    <div className='p-3'>
        <AoraCard/>
        <AoraCard/>
        <AoraCard/>
    </div>
  )
}

export default AoraContainerMiddle
function AoraCard(){
    return(
        <div className='flex p-3 items-center justify-between '>
            <Checkbox
            icon={<RadioButtonUncheckedRoundedIcon/>}
            checkedIcon={<CheckCircleIcon/>}
            sx={{color:defaultColor.default,"&.Mui-checked":{color:defaultColor.default}}}
            />
            <div className='flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 '>
                <div className=' w-full'>
                    {/**Divs for the icon and the  name of the aora */}
                    <div className='flex gap-2 justify-between '>
                        <div className='flex gap-2 items-center'>
                            <FontAwesomeIcon icon={faCode} width={20} height={20}
                            className='p-3 rounded-full w-4 h-4 bg-customed text-white'
                            />
                            <span className=''>Coding</span>

                        </div>

                    </div>
                    {/**Divs for the areas */}
                    <div className='flex gap-2 mt-2 '>
                        <div
                        style={{backgroundColor:defaultColor[100]}}
                         className='p-1 text-white text-[12px] rounded-md px-2'>
                            <span className='text-customed'>Area1</span>

                        </div>
                        <div
                        style={{backgroundColor:defaultColor[100]}}
                         className='p-1 text-white text-[12px] rounded-md px-2'>
                            <span className='text-customed'>Area2</span>

                        </div>

                    </div>


                </div>
                {/**Button  */}
                <div className='w-10 flex items-center justify-center'>
                   <IconButton>
                    <MoreVertIcon/>
                   </IconButton>
                </div>
            </div>

        </div>
    )
}
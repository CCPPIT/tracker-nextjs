import { defaultColor } from '@/constants/Colors'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckCircle from '@mui/icons-material/CheckCircle'
import MoreVert from '@mui/icons-material/MoreVert'
import RadioButtonUncheckedRounded from '@mui/icons-material/RadioButtonUncheckedRounded'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'

type Props = {}

const AoraComplated = (props: Props) => {
  return (
    <div className='bg-white mt-7 p-8 rounded-md'>
        <span className='font-bold text-lg mb-2'>  Aora Complated</span>
        <div className='mt-4 opacity-50'>
            <AoraCard/>
            <AoraCard/>

        </div>
      
        </div>
  )
}

export default AoraComplated
function AoraCard(){
    return(
      <div className='flex p-3 items-center justify-between'>
        <Checkbox
        icon={<RadioButtonUncheckedRounded/>}
        checkedIcon={<CheckCircle/>}
        sx={{color:defaultColor.default,"&.Mui-checked":{
            color:defaultColor.default
        }}}
        />
        <div className='flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 border'>
            <div className='w-full'>
                <div className='flex gap-2 justify-between border'>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faCode} width={20} height={20}
                        className='p-3 rounded-full w-4 h-4 bg-customed text-white'
                        />
                        <span>Coding</span>

                    </div>
                    <div className='w-10 flex items-center justify-center'>
                   <IconButton>
                    <MoreVert/>
                   </IconButton>
                </div>

                </div>

            </div>

        </div>

      </div>
    )
}
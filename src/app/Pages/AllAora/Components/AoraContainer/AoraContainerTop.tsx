import React from 'react';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type Props = {}

const AoraContainerTop = (props: Props) => {
  return (
    <div className='p-3 flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
            <div>
                <h2 className='font-bold text-lg'>Sunday</h2>
                <span className='font-light text-[12px]'>17 May 2024</span>
            </div>
            {/** */}
            <div className='flex gap-1 ml-4'>
                <div className='text-customed cursor-pointer'>
                    <ArrowCircleLeftOutlinedIcon/>
                    
                    

                </div>
                <div className='text-customed cursor-pointer'>
                    <ArrowCircleRightOutlinedIcon/>
                    
                    

                </div>
            </div>
            {/** */}


        </div>
        <button className='flex gap-2 items-center bg-customed p-3 text-white rounded-md text-sm'>
            <FontAwesomeIcon icon={faPlus}/>
          New  Aora
        </button>
    </div>
  )
}

export default AoraContainerTop
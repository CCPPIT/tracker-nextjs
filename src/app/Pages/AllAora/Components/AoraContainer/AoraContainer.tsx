import React from 'react'
import AoraContainerTop from './AoraContainerTop'
import AoraContainerMiddle from './AoraContainerMiddle'
import useGlobalContextProvider from '@/context/contextApi'
import { darkModeColor, defaultColor } from '@/constants/Colors'

type Props = {}

const AoraContainer = (props: Props) => {
  const {darkModeObject:{darkModeItems}}=useGlobalContextProvider();
  return (
    <div
    style={{color:darkModeItems?darkModeColor.textColor:defaultColor.textColor,
      backgroundColor:darkModeItems?darkModeColor.background:defaultColor.background

    }}
     className='mt-5 rounded-md p-5  flex flex-col gap-3'>
        <AoraContainerTop/>
        <AoraContainerMiddle/>
    </div>
  )
}

export default AoraContainer
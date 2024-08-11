import React from 'react'
import AoraContainerTop from './AoraContainerTop'
import AoraContainerMiddle from './AoraContainerMiddle'

type Props = {}

const AoraContainer = (props: Props) => {
  return (
    <div className='mt-5 bg-white rounded-md p-5  flex flex-col gap-3'>
        <AoraContainerTop/>
        <AoraContainerMiddle/>
    </div>
  )
}

export default AoraContainer
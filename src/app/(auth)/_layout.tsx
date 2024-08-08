import React from 'react'

type Props = {
    children:React.ReactNode
}

const LayoutAuth = ({children}: Props) => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>{children}</div>
  )
}

export default LayoutAuth
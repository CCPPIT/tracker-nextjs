import React from 'react'
import Logo from './Logo'
import Buttons from './ButtonNave'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header>
        <div className='p-8 px-20'>
            <div className='sm:flex sm:items-center sm:justify-between'>
                <div className='text-center sm:text-left items-center gap-2'>
                    {/** Logo + Name of the App */}
                    <Logo/>
                   
                   

                </div>
                 {/**Button */}
                <Buttons/>

            </div>


        </div>
    </header>
    
  )
}

export default Navbar
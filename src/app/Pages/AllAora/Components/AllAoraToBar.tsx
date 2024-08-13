import React, { useEffect } from 'react'
import AllAoraSearchBar from './AllAoraSearchBar'
import DarkMode from './DarkMode'
import { UserButton } from '@clerk/nextjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useGlobalContextProvider from '@/context/contextApi'
import { darkModeColor, defaultColor } from '@/constants/Colors'

type Props = {}

const AllAoraToBar = (props: Props) => {
  function openSideBarFunction(){
    setOpenSideBar(!openSideBar)
  }
  useEffect(()=>{
    function handleResize(){
      setOpenSideBar(false)

    }
      // Event listener for window resize
    window.addEventListener("resize",handleResize);
    //Clean up
    return ()=>{
      window.removeEventListener("resize",handleResize)
    }


  })
  
  const{openSideBarObject:{openSideBar,setOpenSideBar},darkModeObject:{darkModeItems}}=useGlobalContextProvider();
  return (
    <div
    style={{color:darkModeItems?darkModeColor.textColor:defaultColor.textColor,
      backgroundColor:darkModeItems?darkModeColor.background:defaultColor.background

    }}
     className='bg-white p-5 rounded-md flex justify-between'>
      <div className='flex gap-4'>
        <div className='max-lg:flex hidden'>
          <UserButton/>

        </div>

      
    <div className='flex flex-col max-md:hidden'>
        <span className='text-xl'>
            <span className='font-bold'>Hi There</span>
            <span className='font-light'>,CCPP </span>
        </span>
        <span className='font-light text-[12px] text-gray-400'>Welcome Back!</span>
    </div>
    </div>
    <div className='w-[50%] max-md:w-[80%] flex gap-3 justify-between'>
    <AllAoraSearchBar/>
    <DarkMode/>
    <FontAwesomeIcon
    icon={faBars}
    onClick={openSideBarFunction}
    className='m-2 max-lg:flex hidden mt-[13px] cursor-pointer'
    />

    </div>
    
    

</div>
  )
}

export default AllAoraToBar
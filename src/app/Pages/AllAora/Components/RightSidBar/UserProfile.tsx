import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const UserProfile = (props: Props) => {
    const userButtonAppearance={
        elements:{
            userButtonAvatarBox:"w-14 h-14",
            userButtonPopoverActionButton:"text-red-600"
        }
    }
    const {user}=useUser();
  return (
    <div className='flex flex-col items-center justify-center mt-8 gap-3 max-lg:hidden'>
        <UserButton appearance={userButtonAppearance}/>
        <span>{user?.fullName}</span>
    </div>
  )
}

export default UserProfile
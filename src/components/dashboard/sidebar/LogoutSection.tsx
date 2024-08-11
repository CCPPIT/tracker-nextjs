import React from 'react'
import {FontAwesomeIcon}from "@fortawesome/react-fontawesome";
import {faRightFromBracket}from "@fortawesome/free-solid-svg-icons"
import { SignOutButton } from '@clerk/nextjs';

type Props = {}

const LogoutSection = (props: Props) => {
  return (
    <div className='flex gap-2 items-center ml-8 p-2 mt-28 hover:text-customed transition-all'>
        <FontAwesomeIcon name='Log out' icon={faRightFromBracket} width={20} height={20}/>
        <SignOutButton/>
    </div>
  )
}

export default LogoutSection
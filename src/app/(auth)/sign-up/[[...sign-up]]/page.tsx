"use client"
import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SignUpPage = (props: Props) => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
            <SignUp/>


    </div>
  )
}

export default SignUpPage
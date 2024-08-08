"use client"
import React from 'react'
import {Button} from "@/components/ui/button";
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

type Props = {}

const Buttons = (props: Props) => {
  const {userId}=useAuth();
  return (
    <div>
      {userId?(
        <Link href={"/dashboard"}>
          <button
          type='button'
           className={`block rounded-lg px-9 py-2 text-sm font-medium text-white transition bg-customed`}>
            Dashboard
          </button>
        </Link>
      ):(
         <div className='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
          <Link href={'/sign-in'}>
          <Button variant={"secondary"} className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-semibold
          text-white transition focus:outline-none `}>Sign In</Button>
          </Link>
        
        <Link href={'/sign-up'}>
        <Button variant={"ghost"} className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-semibold
          text-white transition focus:outline-none bg-customed`}>Sign Up</Button>
        </Link>

         
  </div>

      )}

  
   
    </div>
  )
}

export default Buttons
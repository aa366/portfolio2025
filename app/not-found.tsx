import React from 'react'
import Navbar from '@/components/Navbar'
const NotFound = () => {
  return (
    <>
    <Navbar otherClasses="absolute top-0 z-10" />
    <div className='absolute top-0 w-screen flex items-center justify-center min-h-screen '>

    
    <div className='text-6xl uppercase  dark:text-red-700 text-neutral-500 '>This page doesn't exist.</div>
    </div>
    </>
  )
}

export default NotFound
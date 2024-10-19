import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
const Button = () => {
  return (
    <div className='flex justify-between bg-white  font-semibold gap-8 text-black  text-sm px-3 py-1 rounded-3xl items-center'>
      
    <button className=''>
      Get started 
    </button>
      <BsArrowReturnRight />
    </div>
  )
}

export default Button

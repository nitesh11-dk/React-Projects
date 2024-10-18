import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
const Button = () => {
  return (
    <button className='bg-white flex items-center font-semibold gap-8 text-black  text-sm px-3 py-1 rounded-3xl'>
      Get started 
      <BsArrowReturnRight />
    </button>
  )
}

export default Button

import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
const Button = ({title ='Get Started'}) => {
  return (
    <div className='flex justify-between bg-white  font-semibold gap-8 text-black  text-sm px-3 py-1 rounded-3xl items-center'>
      
    <button className=''>
      {title}
    </button>
      <BsArrowReturnRight />
    </div>
  )
}

export default Button

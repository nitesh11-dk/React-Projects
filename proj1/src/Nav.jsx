import React from 'react'
import Btn from './Components/Button'
const Nav = () => {
  return (
    <div className='font-montserrat w-full  items-center h-full flex py-3 justify-between gap-3  text-[#2E2E2E]'>
<img src="/brand_logo.png" className='h-8 w-20 md:w-24 md:h-12' alt="" />
      <div className=' gap-2 hidden md:flex md:gap-4'>
      {
        ["menu" ,"location","about","contact"].map((elem , index)=>(

            <h1 key={index} className='text-md  font-bold md:text-xl capitalize'>{elem}</h1>
        ))
      }
      </div>
<Btn cnt={"Login"} cs={" bg-red-500 text-white "}></Btn>
    </div>
  )
}

export default Nav

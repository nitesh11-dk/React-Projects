import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Card = ({start}) => {
  return (
    <div className={
        `${start ? "w-[68%] hover:bg-violet-600/60 duration-200 ease-in-out " : "w-[32%]"}  p-6 bg-zinc-700 rounded-3xl flex flex-col justify-between gap-32  `
    }>
        <div>
            <div className='flex justify-between items-center '>
                <h2 className='text-sm opacity-70 mb-2'>
                {
                    start ? "Get a task plan" : "Up Next : Culture"
                }</h2>
                <MdArrowRightAlt className='text-white text-xl' />
            </div>
            <h2 className='text-xl text-white'>{
            start ? "Let's get to it together" : "Who we are"
            } </h2>
           
        </div>
      <div >
       {
        start ? (
            <div>
                
            <h2 className='text-7xl'>Start a Project</h2>
            <button className=' font-semibold px-4 py-1 mt-3 rounded-2xl border-[1px] border-zinc-200'>Contact us </button>
            </div>
        ) : (
            <p className='text-sm opacity-70'>Explore what drives your team </p>
        )
       }
        
      </div>
    </div>
  )
}

export default Card

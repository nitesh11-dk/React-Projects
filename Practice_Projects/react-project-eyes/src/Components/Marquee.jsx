import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
    <div className='w-full mt-8 py-16  rounded-t-3xl  bg-[#004d42] '>
        <div className='flex gap-20  px-4 whitespace-nowrap overflow-hidden border-y '>
      <motion.h1  initial={{x:0}} animate={{x:"00%"}} transition={{ease:"linear" , duration:6, repeat:Infinity}} className='text-[18vw] tracking-tight font-bold leading-none mb-4    uppercase
       '>We are Ochi</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"00%"}} transition={{ease:"linear" , duration:6, repeat:Infinity}} className='text-[18vw] tracking-tight font-bold leading-none mb-4  uppercase
       '> We are Ochi</motion.h1>
    </div>
    </div>
  )
}

export default Marquee

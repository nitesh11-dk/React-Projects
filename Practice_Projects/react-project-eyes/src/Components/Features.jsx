import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Features = () => {
// let [hover, setHover] =useState(false);
let cards = [useAnimation(),useAnimation()];

function handleHoverEnd(elem){
 cards[elem].start({
    y:"100%",

 })
}

function handleHover(elem){
  cards[elem].start({
     y:"0%",
  })
 }

  return (
    <div className='py-12 '>
      <h1 className='text-5xl px-16 font-sm'>Featured projects</h1>
      <div className='w-full  border-t-[1px] flex gap-5 px-10 py-10  border-zinc-500 mt-10'>
     <motion.div onHoverStart={()=>{handleHover(0)}} onHoverEnd={()=>{handleHoverEnd(0)}}  className=' relative w-1/2 hover:z-50  hover:scale-[0.95] duration-300 ease-in-out h-full '>
     <div className='w-full h-full   overflow-hidden rounded-xl'>
        <img className='h-full w-full ' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
      </div>
      <h2 className='absolute   flex top-1/2 left-full overflow-hidden -translate-x-1/2 -translate-y-1/2 text-[7vw] font-bold'>
        {"OCHI".split('').map((elem,index)=>(
            <motion.span initial={{y:"100%"}} transition={{ease:[0, 0.55, 0.45, 1],delay: index*0.07}} animate={cards[0]} className='inline-block '  key={index} >{elem}</motion.span>
        ))}
      </h2>
     </motion.div>
     <motion.div onHoverStart={()=>{handleHover(1)}} onHoverEnd={()=>{handleHoverEnd(1)}} className=' relative w-1/2 hover:scale-[0.95] duration-300 ease-in-out h-full '>
     <div className='w-full h-full   overflow-hidden rounded-xl'>
        <img className='h-full w-full ' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
      </div>
      <h2 className='absolute  flex overflow-hidden top-1/2 right-full translate-x-1/2 -translate-y-1/2 text-[7vw] font-bold'>
      {"VYSE".split('').map((elem,index)=>(
            <motion.span initial={{y:"100%"}} transition={{ease:[0, 0.55, 0.45, 1],delay: index*0.07}} animate={cards[1]} className='inline-block'  key={index} >{elem}</motion.span>
        ))}
      </h2>
     </motion.div>
      </div>
    </div>
  )
}

export default Features

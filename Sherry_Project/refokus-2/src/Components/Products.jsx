import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
const Products = () => {
    let data = [
        {
            title: "Cula",
            content: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: "Case Study"
        },
        {
            title: "BCG ",
            content: "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
            live: true,
            case: false
        },
        {
            title: "Cula",
            content: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: "Case Study"
        },
        {
            title: "Arqitel",
            content: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
            live: true,
            case: "Case Study"
        },
        {
            title: "Sevdesk",
            content: "We collaborated with Sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
            live: true,
            case: false
        }
    ]

    let [ypos , setYPos] = useState(0);

    function changeYpos(val){
      setYPos(val *18);
    }
    
  return (
    <div className=' mt-32 relative'>
      { 
        data.map((elem, idx) => (
          <Product key={idx} data={elem} changeYpos={changeYpos} count={idx} />
        ))
      }
      <div className=' w-full h-h-full pointer-events-none  absolute top-0 bg-zinc-800 '>
            <motion.div 
            initial={{y:ypos  ,x:"-50%" }}
            animate={{y:ypos +'rem'}}
            transition={{ease:[0.76, 0, 0.24, 1] ,duration:0.6}}
             className='w-[25rem] absolute top-0 left-[44%]  h-[18rem]  overflow-hidden '>
            <motion.div   transition={{ease:[0.76, 0, 0.24, 1] ,duration:0.5}} animate={{y:-ypos +'rem'}} className='rounded-xl w-full h-full '>
            <video className='rounded-xl' src="/Video/1.webm" autoPlay loop muted></video>
            </motion.div>
            <motion.div   transition={{ease:[0.76, 0, 0.24, 1] ,duration:0.5}} animate={{y:-ypos +'rem'}} className='rounded-xl w-full h-full '>
            <video className='rounded-xl' src="/Video/2.webm" autoPlay loop muted></video>
            </motion.div>
            <motion.div   transition={{ease:[0.76, 0, 0.24, 1] ,duration:0.5}} animate={{y:-ypos +'rem'}} className='rounded-xl w-full h-full '>
            <video className='rounded-xl' src="/Video/3.webm" autoPlay loop muted></video>
            </motion.div>
            <motion.div   transition={{ease:[0.76, 0, 0.24, 1] ,duration:0.5}} animate={{y:-ypos +'rem'}} className='rounded-xl w-full h-full '>
            <video className='rounded-xl' src="/Video/4.webm" autoPlay loop muted></video>
            </motion.div>
            <motion.div   transition={{ease:[0.76, 0, 0.24, 1] ,duration:0.5}} animate={{y:-ypos +'rem'}} className='rounded-xl w-full h-full '>
            <video className='rounded-xl' src="/Video/5.webm" autoPlay loop muted></video>
            </motion.div>
            </motion.div>
      </div>
    </div>
  )
}

export default Products

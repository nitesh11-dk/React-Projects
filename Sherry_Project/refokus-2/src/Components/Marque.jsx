import { motion } from 'framer-motion'
import React from 'react'

const Marque = ({item , direction}) => {
  
  
  return (
    <div className='flex gap-8 py-4 w-full overflow-hidden'>
      <motion.div initial={{x: direction === 'left' ? "0%" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0%"}} transition={{ease:"linear", duration: 30 ,repeat: Infinity}} className='flex flex-shrink-0 '>
      {
        item.map((url, idx) => (
            <img  key={idx} className='w-56 h-5' src={url} alt="marque"  />
        ))
      }
      </motion.div>
      <motion.div initial={{x: direction === 'left' ? "0%" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0%"}} transition={{ease:"linear", duration: 30 ,repeat: Infinity}} className='flex flex-shrink-0 '>
      {
        item.map((url, idx) => (
            <img  key={idx} className='w-56 h-5' src={url} alt="marque"  />
        ))
      }
      </motion.div>
    </div>
  )
}

export default Marque

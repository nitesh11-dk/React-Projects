import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';  // Import Close icon
import { motion } from "framer-motion"
const Card = ({ data ,reference }) => {
  const { desc, size, close, tagDetls } = data;
  const { isOpen, tagColor, tagContnt } = tagDetls;

  const tagBgColor = tagColor === 'green' ? 'bg-green-500' : 'bg-blue-500';

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.3} dragTransition={{ bounceStiffness: 30, bounceDamping: 10 }} className='  relative w-44 h-56 rounded-3xl overflow-hidden bg-zinc-900/50 py-8 px-4 text-zinc-300'>
      <div className='flex flex-col gap-3'>
        <FaRegFileAlt />
        <p className='text-sm font-semibold'>{desc}</p>
      </div>

      <div className='fotter absolute bottom-0 left-0 w-full'>
        <div className='w-full flex justify-between px-4 items-center mb-4'>
          <h5 className='text-sm font-medium'>{size}</h5>
          <p className='flex items-center justify-center text-white rounded-full w-5 h-5 bg-zinc-500'>
            {close ? <RiCloseFill className='text-sm' /> : <FiDownload className='text-sm' />}
          </p>
        </div>

        {isOpen && (
          <div className={`tag ${tagBgColor} flex items-center justify-center w-full py-2`}>
            <h2 className='text-xs text-white font-semibold'>{tagContnt}</h2>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

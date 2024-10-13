import React, { useState } from 'react';

const Options = ({setActualNumber,actualNumber }) => {

  return (
    <div>
      <p className='text-xl text-center font-semibold pb-2'>Select number</p>
      <div className='flex flex-wrap gap-2 justify-center'>
        {[1, 2, 3, 4, 5, 6].map((el, idx) => (
          <span
            key={idx}
            onClick={(e) =>  setActualNumber(e.target.textContent)}
            className={`h-16 w-16 rounded-md duration-[0.3s] ease-in  border border-rich-black flex items-center justify-center font-bold text-2xl ${actualNumber -1 == idx ? 'bg-rich-black text-white' : ''
            }`} 
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Options;

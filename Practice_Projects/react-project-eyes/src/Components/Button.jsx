import React from 'react';

const Button = ({ light, cnt }) => {
  return (
    <div className={`py-3 px-6 w-fit text-2xl mx-auto m-6 rounded-full flex gap-5 items-center 
      ${light ? "bg-transparent border-[1px] border-black text-black font-medium hover:bg-black hover:text-white transition duration-300" 
              : "bg-[#000000] text-zinc-200 font-semibold hover:bg-zinc-300 hover:text-black transition duration-300"} 
      transform hover:scale-105`}>
      <h2>{cnt}</h2>
      <span className={`w-2 h-2 rounded-full ${light ? "bg-black" : "bg-white"} `}></span>
    </div>
  );
};

export default Button;

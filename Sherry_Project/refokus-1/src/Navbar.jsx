import React from 'react';
import Button from './Components/Button';
const Navbar = () => {
  return (
    <div className='max-w-screen-xl font-[arial] mx-auto p-2 my-2  flex items-center justify-between border-b-[1px] pb-3'>
      <div className="links flex gap-5">
        <h1 className='text-xl mr-6'>®️</h1>
        {
          ["home", "work", "culture","" , "news"].map((elem, idx) => (
            <div key={idx} className='flex items-center'>
              <a href="#" className='text-md capitalize flex items-center'>
                {idx === 1 && <span className='inline-block h-2 w-2 shadow-lg rounded-full m-1 bg-zinc-200'></span>}
                {elem}
              </a>
              {elem.length === 0 && <span className='h-full w-[1px] bg-zinc-300/30'></span>}
            </div>
          ))
        }
      </div>
      <Button></Button>
    </div>
  )
}

export default Navbar;

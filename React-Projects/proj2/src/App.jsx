import React from 'react';
import Btn from './Btn';
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Form from './Form';
function App() {
  return (
    <>
    <div className='min-h-screen w-screen px-4 py-4 bg-slate-900 text-white md:py-20 md:px-24'>
      <h1 className='font-montserrat font-bold text-4xl uppercase '>contact us</h1>
      <p className='text-md py-3 w-[95%] opacity-85 leading-5'>
      let's connect: we're here to help, and we'd love to hear from you! whether you have a question, comment . let's connect: we're here to help, and we'd love to hear from you! whether you have a question, comment .     </p>
   <div className='md:flex md:flex-row-reverse md:justify-between md:gap-16 md:items-center '>
    <img className='w-full my-2  md:w-1/2' src="/Service 24_7-pana 1.svg"  alt="" />
   <div className="form md:w-1/2">
    <div className='flex justify-between pt-2'>
     <Btn icon={<MdOutlineMessage />} text="Via Support Chat"/>
     <Btn icon={<IoCallSharp />} text="Via Call"/>
     </div>
     <Btn icon={<MdOutlineMessage />} style={"mx-auto w-full  text-center bg-blue-300  justify-center"} text="Via Email Form"/>
     <Form/>
    
      
    </div>
   </div>
      
    </div>
    </>
  );
}


export default App;

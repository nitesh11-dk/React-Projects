import React from 'react'
import Btn from './Btn'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const [data ,setData] = React.useState({})

    const handleSubmit = (e)=>{
        e.preventDefault() 
        toast.success(` ${data.name} Your Message sent Successfully`)
        console.log(data)
       
    }

  return (
      <div className='py-4 flex flex-col gap-2'>
        <ToastContainer position='bottom-right' theme='dark'  autoClose={1000} />
        <form onSubmit={handleSubmit}>
        <input required type="text" className=' h-8 w-full bg-white text-black border border-gray-300 rounded-sm p-2 mb-3 outline-none ' onChange={(e)=> setData({...data, name: e.target.value})} placeholder='Enter Your name ' />
<input required type="text" className=' h-8 w-full bg-white text-black border border-gray-300 rounded-sm p-2 mb-3 outline-none' onChange={(e)=> setData({...data, email: e.target.value})} placeholder='Enter Your Email ' />
<textarea required className=' w-full bg-white text-black border border-gray-300 rounded-sm p-2 mb-3 outline-none' onChange={(e)=> setData({...data, message: e.target.value})} placeholder='Message '></textarea>
 <Btn  text="Submit" style={" px-12 "}  />
        </form>
    </div>
  )
}

export default Form

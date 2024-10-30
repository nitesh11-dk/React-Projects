import React from 'react'
import Button from './Button'
import EyesEffect from './EyesEffect'
const Fotter = () => {
  return (
    <div className='  flex flex-col justify-between pt-20 pb-8 w-screen h-screen bg-[#c8ff00]'>
       <div>
       {
        ["Ready","To Start", "The Project ?"].map((elem)=>(
    
           <h2 className='text-[7vw] tracking-tight leading-none text-[#212121] text-center font-bold'>{elem}</h2>
           
        ))
       }
       </div>

    <div className='relative scale-[0.8]'>
    <EyesEffect/>
    </div>
<div>
<Button light={true} cnt={"START THE PROJECT"}></Button>
<Button light={false} cnt={"START THE PROJECT"}></Button>
       
</div>
    </div>
  )
}

export default Fotter

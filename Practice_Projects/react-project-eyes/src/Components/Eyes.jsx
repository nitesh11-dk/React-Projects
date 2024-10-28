import React, { useEffect, useState } from 'react'

const Eyes = () => {
let [angle , setAngle] = useState()
    useEffect(()=>{
         window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let dX = mouseX  - window.innerWidth/2;
            let dY = mouseY  - window.innerHeight/2;
          let a = Math.atan2(dY ,dX) * (180/Math.PI);// redian to degree 
          setAngle(a);
         })
    })
  return (
    <div className='relative   bg-cover bg-center w-screen h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10'>
         <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'>
            <div className='w-2/3 h-2/3 relative bg-zinc-800 rounded-full '>
           <div style={{transform:`translate(-50% , -50%) rotate(${angle -180}deg)`}} className={` absolute top-1/2 left-1/2  h-5 w-full flex items-center    p-1`} >
           <div className='w-[28px] h-[28px] bg-zinc-100 rounded-full'></div>
           </div>
            </div>

         </div>
         <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'>
         <div className='w-2/3 h-2/3 relative bg-zinc-800 rounded-full '>
           <div style={{transform:`translate(-50% , -50%) rotate(${angle -180}deg)`}} className={` absolute top-1/2 left-1/2  h-5 w-full flex items-center    p-1`} >
           <div className='w-[28px] h-[28px] bg-zinc-100 rounded-full'></div>
           </div>
            </div>

         </div>
      </div>
    </div>
  )
}

export default Eyes

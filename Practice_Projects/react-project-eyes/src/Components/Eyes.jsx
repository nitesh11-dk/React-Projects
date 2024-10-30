import React, { useEffect, useState } from 'react'
import EyesEffect from './EyesEffect'
const Eyes = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed='-0.7'  className='relative   bg-cover bg-center w-screen h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
     <EyesEffect/>
    </div>
    </div>
  )
}

export default Eyes

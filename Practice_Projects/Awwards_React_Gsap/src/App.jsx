import React from 'react'
import Canvas from './Canvas'
import data from './data'

import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className=' w-screen h-screen bg-base-200 '>

<div className='w-full relative min-h-screen'>
{      data[0].map((elem , index)=>(

<Canvas key={index} details={elem}></Canvas>
))}
</div>
<div className='w-full relative min-h-screen'>
{      data[1].map((elem , index)=>(

<Canvas key={index} details={elem}></Canvas>
))}
</div>
<div className='w-full relative min-h-screen'>
{      data[2].map((elem , index)=>(

<Canvas key={index} details={elem}></Canvas>
))}
</div>
    </div>
  )
}

export default App
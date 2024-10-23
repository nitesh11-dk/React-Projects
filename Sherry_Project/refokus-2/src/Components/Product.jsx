import React from 'react'
import Button from './Button'

const Product = ({data ,count  ,changeYpos}) => {
  return (
    <div onMouseEnter={()=>{changeYpos(count)}} className='w-full flex flex-row items-center justify-between py-20 px-28 '>
      <h2 className='text-7xl capitalize '>{data.title}</h2>
      <div className='w-1/3 '>
        <p className='text-md tracking-wide   '>{data.content}</p>
 <div className='flex items-center gap-8 mt-4'>
    {data.live && <Button  ></Button>} 
    {data.case && <Button  title={data.case}></Button>} 
    
 </div>
      </div>
    </div>
  )
}

export default Product

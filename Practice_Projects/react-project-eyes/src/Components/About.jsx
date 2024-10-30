import React from 'react'

const About = () => {
  return (
    <div className='w-full  bg-[#ceeb67] rounded-t-3xl -mt-4 py-10 '>
      <h2 className='capitalize leading-[3.5vw] text-[3vw] px-10 text-black'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h2>
<div className='border-t border-zinc-500 py-5 flex justify-between mt-16 px-10'>
<div className="w-1/2">
<h2 className='text-[#212121] leading-none text-[4vw] mb-3'>Our approach : </h2>
<button className='uppercase items-center  p-4 px-6 bg-[#212121] flex rounded-[3.2vw] gap-4 font-semibold'>Read More <span className='inline-block w-2 h-2 bg-white rounded-full '></span></button>
</div>
<div className='w-1/2'>
 <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' className=' bg-[#acd02a] rounded-3xl h-[60vh] w-full' />
</div>

    </div>
    </div>
  )
}

export default About

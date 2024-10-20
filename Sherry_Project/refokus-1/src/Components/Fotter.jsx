import React from 'react'

const Fotter = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-10 flex  gap-44 items-center '>
      <div className='basis-1/2'>
        <h2 className='text-[11.2rem]'>refokus.</h2>
      </div>
      <div className='basis-1/2 flex  gap-10'>
      <div>
            <h2 className='mb-10 opacity-70'>Socials</h2>
        {  
        ["instagram","twitter (X?)" ,"facebook" ].map((elem, idx) => (
            <a href="#" className='block opacity-55  capitalize' >{elem}</a>
        ))
        }
        </div>
        <div>
            <h2 className='mb-10 opacity-70'>Socials</h2>
        {  
        ["instagram","twitter (X?)" ,"facebook" ].map((elem, idx) => (
            <a href="#" className='block opacity-55  capitalize' >{elem}</a>
        ))
        }
        </div>
        <div className='flex flex-col justify-between items-end'>
            <p className='w-2/3'>
            Refokus is a pioneering digital agency
driven by design and empowered by
technology,
            </p>
            <img className='w-2/3 ' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Fotter

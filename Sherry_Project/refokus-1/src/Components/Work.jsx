import React from 'react'

const Work = () => {
    let images = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-500.webp" , top: "55%" , left : "45%" , isActive:true},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1-p-500.webp" , top: "58%" , left : "54%" , isActive: false } ,
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-500.webp" , top: "68%" , left : "47%" , isActive: false }

    ]
    
  return (
    <div className=' relative max-w-screen-xl mx-auto text-center w-full  mt-28 mb-10' >
       <h1 className='font-satoshi text-[30vw] mx-auto select-none tracking-wide font-sm leading-none font-medium '>Work</h1>
       {
        images.map((elem, idx) => (
          elem.isActive && <img key={idx} style={{top: elem.top  , left: elem.left}} className={`absolute
            w-56 h-56      object-contain rounded-lg -translate-x-1/2 -translate-y-1/2 `} src={elem.url} alt="" />
        ))
       }
    </div>
  )
}

export default Work

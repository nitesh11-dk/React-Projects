import React, { useState } from 'react'

import {  useMotionValueEvent, useScroll } from 'framer-motion';




const Work = () => {
  let [images , setImages] = useState( [
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-500.webp" , top: "55%" , left : "45%" , isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1-p-500.webp" , top: "58%" , left : "54%" , isActive: false } ,
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-500.webp" , top: "68%" , left : "47%" , isActive: false }

])

  const {scrollYProgress } = useScroll();
  //  M-1 
  // scrollYProgress ye 0 se 1 value deta hai 
  // scrollYProgress.on("change", (latest) => {
  //   const y = Math.floor(latest * 100);
  //   setImages((prev) =>
  //     prev.map((img, index) => ({
  //       ...img,
  //       isActive: index <= y - 2, 
  //     }))
  //   );
  // });

  // feature 
  function imagesShow(arr){
    setImages(prev =>(
      prev.map((img, index) => ((
        arr.indexOf(index) !== -1 ? {...img , isActive : true} : {...img , isActive : false}
         
      )))

    ))
  }
  scrollYProgress.on("change", (latest) => {
    const y = Math.floor(latest * 100);
    switch (y) {
      case 0:
        imagesShow([])
        break;
        case 2:
          imagesShow([0])
          break; 
          case 4:
            imagesShow([0,1])
            break;
            case 6:
              imagesShow([0,1,2])
        break;
    }
  });
  



    
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

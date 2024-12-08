import { useEffect,useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Project = () => {
  let div  = useRef(null);
  let container  = useRef(null);
  let [x,setX] = useState(0);
  let [y,setY] = useState(0);

  let  [scale,setScale] = useState(1);


  useGSAP(()=>{
    gsap.to(".circle",{
     x:x,
     y:y
    })
  },[x,y]);

  useGSAP(()=>{
    gsap.to(container.current, {
          scale: scale,
          duration: 0.5,
          ease: "power1.out"});
  },[scale]);

  useEffect(()=>{
      div.current.addEventListener("mousemove", (e) => {
        setX(e.clientX);
        setY(e.clientY);
      })
   
      container.current.addEventListener("mouseenter", () => {
        setScale(0.9);  
      });
  
  },[])

 
  
  return (
    <>
    
    <div className="circle pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10 w-4 absolute   h-4 bg-red-400 rounded-full"></div>
    <div ref={div} className=' overflow-hidden relative w-screen h-screen bg-base-300 flex justify-center items-center'
    >
    
  <div className='flex w-full h-1/2 gap-4 bg-zinc-500 px-10 items-center '>

    <div className="right w-2/3 h-full  flex justify-center items-center">
   
   <div ref={container} onMouseLeave={()=>{ setScale(1);}}>
   <img src="https://atelierdesign.be/wp-content/uploads/2024/06/Brochure_Cover_on_Red_Background-1-1366x909.jpg" alt="" />
    
   </div>
    </div>

    <div className="left w-1/3  p-3 h-1/2 flex flex-col justify-center">
      <h2 className='text-md text-white '>02 ____</h2>
      <h2 className='text-4xl font-semibold text-white '>EORTC</h2>
      <h2 className='text-md font-light my-2 text-white '>Highlighting therapeutic advances in cancer treatment through their new annual report</h2>
      <h2 className='text-md text-white font-semibold my-3'>View Project</h2>
    </div>


  </div>

    </div>
    </>
  )
}

export default Project
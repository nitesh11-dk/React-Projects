import { useEffect ,useRef, useState } from 'react'
import canvaimage  from './canvaimage.js'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


const Canvas = () => {
  const canvasRef = useRef(null);
  const [index , setIndex]= useState({value:0});

  useGSAP(()=>{
  gsap.to(index,{
    value:149,
    duration:3,
    ease:"linear",
    repeat:"-1",
    onUpdate:()=>{
      setIndex({value:Math.round(index.value)});
    }
  })

  })

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = canvaimage[index.value];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
    };
  }, [index]);


  return (
    <canvas ref={canvasRef} className='w-[18rem] h-[18rem]'>

    </canvas> // Set desired width and height
  );
}

export default Canvas ;
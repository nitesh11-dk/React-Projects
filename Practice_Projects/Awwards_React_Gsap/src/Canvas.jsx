import { useEffect ,useRef, useState } from 'react'
import canvaimage  from './canvaimage.js'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


const Canvas = ({details}) => {
  const canvasRef = useRef(null);
  const {startIndex,numImages,size,top,left ,zIndex} = details
  const [index , setIndex]= useState({value:startIndex});

  useGSAP(()=>{
  gsap.to(index,{
    value:startIndex +numImages -1  ,
    duration:3,
    ease:"linear",
    repeat:"-1",
    onUpdate:()=>{
      setIndex({value:Math.round(index.value)});
    }
  }) 


  })

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvaimage[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";

      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);



  return (
    <canvas
    data-scroll
    data-scroll-speed={Math.random().toFixed(1)}
    ref={canvasRef}
    className="absolute"
    style={{
      width: `${size * 1.8}px`,
      height: `${size * 1.8}px`,
      top: `${top}%`,
      left: `${left}%`,
      zIndex: `${zIndex}`,
    }}
    id="canvas"
  ></canvas>
  );
}

export default Canvas ;
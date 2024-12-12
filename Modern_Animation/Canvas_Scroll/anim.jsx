import React, { useEffect, useRef ,useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';


const CanvasScrollAnimation = () => {
  const locomotiveScroll = new LocomotiveScroll();

  
  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  
  useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const frames = {
        currentFrame: 0,
        totalFrames: 710,
      };
      let imagesLoaded = 0;
      const images = [];


      const preLoader = () => {
        for (let i = 1; i <= frames.totalFrames; i++) {
          const imgUrl = `/anime/frame_${i.toString().padStart(4, "0")}.jpeg`;
          const img = new Image();
  
          img.src = imgUrl;
          img.onload = () => {
            imagesLoaded++;
            images.push(img);
            if (imagesLoaded === frames.totalFrames) {
              loadImage(frames.currentFrame);
              startAnimation();
            }
          };
        }
      };
  

      const loadImage = (index) => {
        if (index >= 0 && index < frames.totalFrames) {
          const img = images[index]; 
  
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
  
          const scaleX = canvas.width / img.width;
          const scaleY = canvas.height / img.height;
          const scale = Math.max(scaleX, scaleY); // Use min instead of max to prevent cropping
          // const scale = Math.min(scaleX, scaleY); 
  
          const newWidth = img.width * scale;
          const newHeight = img.height * scale;
  
          const offsetX = (canvas.width - newWidth) / 2;
          const offsetY = (canvas.height - newHeight) / 2;
  
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        }
      };
  
      const startAnimation = () => {
        gsap.to(frames, {
          currentFrame: frames.totalFrames , 
          scrollTrigger: {
            trigger: parentRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.7,
            // pin: true, // issue ayat hai keuu vo additional padding add karta hai so 
            // markers: true,
          },
          onUpdate: () => {
            loadImage(Math.floor(frames.currentFrame));
          },
        });
      };
  
  
    preLoader();
    })

    
   
   

  return (
    <div className="h-screen">
      <div
        ref={parentRef}
         className="parent relative top-0 left-0 w-full h-[700vh] bg-red-500"
      >
        <div className="sticky top-0 left-0 w-full h-[100vh] bg-zinc-500">
          <canvas   ref={canvasRef} className="w-full h-screen" id="frame"></canvas>
          
        </div>
      </div>
    </div>
  );
};

export default CanvasScrollAnimation;

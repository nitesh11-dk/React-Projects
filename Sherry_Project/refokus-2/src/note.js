// loco motvie insstall 

// npm install locomotive-scroll@beta

import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();


// npm install framer-motion         

import {  useMotionValueEvent, useScroll } from 'framer-motion';


const {scrollY ,scrollYProgress } = useScroll();
// scrollYProgress ye 0 se 1 value deta hai 


useMotionValueEvent(scrollYProgress, "change", (latest) => {
  console.log(latest);
})


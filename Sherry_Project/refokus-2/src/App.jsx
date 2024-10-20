import React from 'react';
import Navbar from './Navbar';
import Work from './Components/Work';
import Stripes from './Components/Stripes';
import Products from './Components/Products';
import Marquees from './Components/Marquees';
import Cards from './Components/Cards';
import Fotter from './Components/Fotter';
import LocomotiveScroll from 'locomotive-scroll';

import {  useMotionValueEvent, useScroll } from 'framer-motion';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
    <div className=' p-1 min-h-screen min-w-screen text-zinc-100 bg-zinc-800'>
 <Navbar></Navbar>      
<Work/>
<Stripes></Stripes>
<Products></Products>
<Marquees></Marquees>
<Cards></Cards>
<Fotter></Fotter>
    </div>
    </>
  );
}

export default App;

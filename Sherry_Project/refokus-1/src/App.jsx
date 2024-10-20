import React from 'react';
import Navbar from './Navbar';
import Work from './Components/Work';
import Stripes from './Components/Stripes';
import Products from './Components/Products';
function App() {
  return (
    <>
    <div className=' p-1 min-h-screen min-w-screen text-zinc-100 bg-zinc-800'>
 <Navbar></Navbar>      
<Work/>
<Stripes></Stripes>
<Products></Products>
    </div>
    </>
  );
}

export default App;

import React from 'react';
import Navbar from './Navbar';
import Work from './Components/Work';
function App() {
  return (
    <>
    <div className=' p-1 min-h-screen min-w-screen text-zinc-100 bg-zinc-800'>
 <Navbar></Navbar>      
<Work/>
    </div>
    </>
  );
}

export default App;

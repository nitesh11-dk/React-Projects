import React from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
function App() {
  return (
    <>
    <div className='min-h-screen min-w-screen bg-zinc-900 text-amber-50'>
      <Navbar/>
      <Landing/>
    </div>
    </>
  );
}

export default App;


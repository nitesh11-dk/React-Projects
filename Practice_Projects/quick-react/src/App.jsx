import React from 'react';
import Background from './Components/Background';
import ForeGround from './Components/ForeGround';

function App() {
  return (
    <>
    <div className='  selection:text-yellow-600 relative h-screen w-screen bg-zinc-700 p-1'>
    <Background />
    <ForeGround/>
    </div>
    </>
  );
}

export default App;

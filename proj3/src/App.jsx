import React, { useState } from 'react';
import Home from './Components/Home';
import Game from './Components/Game';
function App() {
  let [showGame , setShowGame] = useState(false);
  
  return (
    <>
    <div className='min-h-screen min-w-screen bg-snow  '>
         {showGame ? <Game/> :<Home setShowGame={setShowGame}/>} 
    </div>
    </>
  );
}

export default App;

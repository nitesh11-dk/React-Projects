import React, { useRef } from 'react';

const App = () => {
  const refs = useRef([]);
  const toggleBackgroundColor = () => {
    refs.current.forEach((ref) => {
      if (ref) {
        ref.style.backgroundColor =
          ref.style.backgroundColor === 'blue' ? 'red' : 'blue';
      }
    });
  };

  return (
    <div className='w-screen h-screen bg-base-200 justify-center flex items-center flex-col'>
      <div
        ref={(el) => (refs.current[0] = el)}
        className='h-44 w-40 flex items-center justify-center bg-red-500 rounded-xl'>
        The Box
      </div>
      <div
        ref={(el) => (refs.current[1] = el)}
        className='h-40 w-40 flex items-center justify-center bg-red-500 rounded-xl'>
        The Box
      </div>
      <button
        onClick={toggleBackgroundColor}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg'>
        Toggle Background
      </button>
    </div>
  );
};

export default App;

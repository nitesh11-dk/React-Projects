import React from 'react';

const ProductShimmer = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-8'>
      <div className='relative flex bg-white shadow-2xl rounded-lg max-w-4xl'>
        {/* Shimmer category */}
        <div className='absolute top-2 left-1/2 -translate-x-1/2 bg-gray-300 h-6 w-1/4 rounded-lg animate-pulse'></div>

        <div className='w-1/2 p-12 flex justify-center'>
          {/* Shimmer image */}
          <div className='h-64 w-full bg-gray-300 rounded-lg animate-pulse'></div>
        </div>

        <div className='w-1/2 p-8 flex flex-col justify-center items-center'>
          {/* Shimmer title */}
          <div className='h-8 w-3/4 bg-gray-300 rounded-lg animate-pulse mb-4'></div>
          {/* Shimmer description */}
          <div className='h-4 w-5/6 bg-gray-300 rounded-lg animate-pulse mb-4'></div>
          {/* Shimmer price */}
          <div className='h-6 w-1/2 bg-gray-300 rounded-lg animate-pulse mb-4'></div>

          {/* Shimmer rating */}
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <div className='h-6 w-10 bg-gray-300 rounded-lg animate-pulse'></div>
            <div className='h-4 w-24 bg-gray-300 rounded-lg animate-pulse'></div>
          </div>

          {/* Shimmer button */}
          <div className='h-10 w-1/2 bg-blue-300 rounded-lg animate-pulse'></div>
        </div>
      </div>
    </div>
  );
};

export default ProductShimmer;

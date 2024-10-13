import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="w-56 h-72 p-4 bg-white shadow-md rounded-lg animate-pulse" // Added shadow-md
        >
          <div className="h-48 bg-gray-200 rounded-lg mb-4 shadow-sm" /> {/* Added shadow-sm */}
          <div className="h-5 bg-gray-200 rounded mb-2 shadow-sm" /> {/* Added shadow-sm */}
          <div className="h-4 bg-gray-200 rounded shadow-sm" /> {/* Added shadow-sm */}
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

import React from 'react';

const CloudBackground = () => {
  return (
    <div className="h-40 bg-gradient-to-b from-sky-300 to-sky-200 relative overflow-hidden">
      {/* Cloud 1 */}
      <div className="absolute top-4 left-8 w-20 h-12 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-6 left-12 w-24 h-10 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-5 left-16 w-20 h-12 bg-white rounded-full opacity-80"></div>
      
      {/* Cloud 2 */}
      <div className="absolute top-8 right-12 w-16 h-10 bg-white rounded-full opacity-70"></div>
      <div className="absolute top-10 right-16 w-20 h-8 bg-white rounded-full opacity-70"></div>
      <div className="absolute top-9 right-20 w-16 h-10 bg-white rounded-full opacity-70"></div>
      
      {/* Cloud 3 */}
      <div className="absolute top-16 left-1/3 w-18 h-10 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-18 left-1/3 w-22 h-8 bg-white rounded-full opacity-60"></div>
      
      {/* Additional small clouds */}
      <div className="absolute top-12 right-1/4 w-12 h-6 bg-white rounded-full opacity-50"></div>
      <div className="absolute top-20 left-1/4 w-14 h-7 bg-white rounded-full opacity-50"></div>
    </div>
  );
};

export default CloudBackground;
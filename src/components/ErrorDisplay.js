import React from 'react';

const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <p className="text-gray-800 text-xl font-semibold mb-2">Oops! Something went wrong</p>
        <p className="text-gray-600 mb-4">{error}</p>
        <button 
          onClick={onRetry}
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;
import React from 'react';

const NoResults = () => {
  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-4">🔍</div>
      <p className="text-gray-600 text-xl">No users found matching your search</p>
      <p className="text-gray-400 mt-2">Try a different search term</p>
    </div>
  );
};

export default NoResults;
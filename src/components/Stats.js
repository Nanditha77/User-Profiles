import React from 'react';

const Stats = ({ posts, followers, following }) => {
  return (
    <div className="flex justify-around px-6 py-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-800">{posts}</div>
        <div className="text-xs text-gray-500 mt-1">Posts</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-800">{followers}</div>
        <div className="text-xs text-gray-500 mt-1">Followers</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-800">{following}</div>
        <div className="text-xs text-gray-500 mt-1">Following</div>
      </div>
    </div>
  );
};

export default Stats;
import React from 'react';

const UserInfo = ({ name, username, bio }) => {
  return (
    <div className="text-center px-6 mb-2">
      <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
      <p className="text-gray-500 text-sm mt-1">{bio}</p>
    </div>
  );
};

export default UserInfo;
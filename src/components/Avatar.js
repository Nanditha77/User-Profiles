import React from 'react';

const Avatar = ({ name, userId }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarColors = [
    'bg-blue-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-red-400',
    'bg-indigo-400',
    'bg-teal-400',
  ];

  const ringColors = [
    'ring-blue-300',
    'ring-purple-300',
    'ring-pink-300',
    'ring-green-300',
    'ring-yellow-300',
    'ring-red-300',
    'ring-indigo-300',
    'ring-teal-300',
  ];

  const color = avatarColors[userId % avatarColors.length];
  const ring = ringColors[userId % ringColors.length];

  return (
    <div className="relative flex justify-center -mt-16 mb-3">
      <div className={`w-32 h-32 rounded-full ${color} ${ring} ring-4 flex items-center justify-center text-white text-4xl font-bold shadow-lg`}>
        {getInitials(name)}
      </div>
    </div>
  );
};

export default Avatar;
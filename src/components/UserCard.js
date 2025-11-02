import React from 'react';
import CloudBackground from './CloudBackground';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import ContactDetails from './ContactDetails';

const UserCard = ({ user }) => {

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <CloudBackground />
      <Avatar name={user.name} userId={user.id} />
      <UserInfo 
        name={user.name} 
        username={user.username}
        
      />

      <ContactDetails 
        email={user.email}
        phone={user.phone}
        website={user.website}
        company={user.company}
        address={user.address}
      />
    </div>
  );
};

export default UserCard;
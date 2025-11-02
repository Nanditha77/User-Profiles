import React from 'react';

const ContactDetails = ({ email, phone, website, company, address }) => {
  return (
    <div className="px-6 pb-4 space-y-2 text-sm">
      <div className="text-gray-700">
        <span className="font-bold">Email:</span> {email}
      </div>
      <div className="text-gray-700">
        <span className="font-bold">Phone:</span> {phone}
      </div>
      <div className="text-gray-700">
        <span className="font-bold">Website:</span>{' '}
        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {website}
        </a>
      </div>
      <div className="text-gray-700">
        <span className="font-bold">Company:</span> {company.name}
      </div>
      <div className="text-gray-700 text-xs italic text-gray-500">
        "{company.catchPhrase}"
      </div>
      <div className="text-gray-700">
        <span className="font-bold">Address:</span> {address.street}, {address.city}
      </div>
    </div>
  );
};

export default ContactDetails;
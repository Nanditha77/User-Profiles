import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm, resultCount, totalCount }) => {
  return (
    <div className="bg-pink-100 shadow-sm sticky top-0 pt-7 z-10">
      <div className="max-w-7xl mx-auto flex justify-around px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-950 font-mono mb-6">User Dashboard</h1>
        <div className="max-w-2xl relative">
          <Search className="absolute left-4 top-1/3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
          />
        </div>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Showing {resultCount} of {totalCount} users
        </p>
      
    </div>
  );
};

export default SearchBar;
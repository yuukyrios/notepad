import React from 'react';

function Navbar({ searchQuery, handleSearch }) {
  return (
    <div className="bg-white shadow-md p-4 mb-24">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <img 
          src="./logo.svg"
          alt="KodeNote Logo"
          className="w-32 h-auto"
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-80 border border-gray-300"
        />
      </div>
    </div>
  );
}

export default Navbar;

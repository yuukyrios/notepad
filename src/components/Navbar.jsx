import React from 'react';

function Navbar({ searchQuery, handleSearch }) {
  return (
    <div className="bg-blue-600 text-white p-4 ">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">KodeNote</h1>
        <input
          type="text"
          placeholder="Search notes by title"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
}

export default Navbar;

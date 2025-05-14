import React from 'react';

function Note({ title, content, openNote, deleteNote }) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-md w-64 cursor-pointer" onClick={openNote}>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{content}</p>
      {/* Delete button */}
      <button
        onClick={deleteNote} // Trigger delete function
        className="mt-2 text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;

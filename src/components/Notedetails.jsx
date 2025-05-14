import React from 'react';

function NoteDetails({ note, closeNoteDetails }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
        <p className="text-sm text-gray-700 mb-4">{note.content}</p>
        <button 
          onClick={closeNoteDetails} 
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default NoteDetails;

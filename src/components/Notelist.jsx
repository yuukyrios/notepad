import React from 'react';
import Note from './Note';

function NoteList({ notes, openNote, deleteNote }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Active Notes</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <Note 
              key={index} 
              title={note.title} 
              content={note.content} 
              openNote={() => openNote(note)} // Ensure openNote is used correctly
              deleteNote={() => deleteNote(index)} // Pass the deleteNote function
            />
          ))
        ) : (
          <p>No notes found.</p>
        )}
      </div>
    </div>
  );
}

export default NoteList;

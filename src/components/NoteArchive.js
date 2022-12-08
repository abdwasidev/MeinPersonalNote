import React from 'react';
import NoteItem from './NoteItem'

function NoteArchive({ notes, onDelete, onArchive}) {
    
    return (
        <>
            <h2>Note Archive</h2>
            {notes.length > 0 ? (
            <div className="notes-list">
                
                {notes.map((note) => {
                    return  <NoteItem 
                    key={note.id}
                    id={note.id} 
                    title={note.title}
                    createdAt={note.createdAt}
                    body={note.body}
                    onDelete={onDelete} 
                    onArchive={onArchive}
                    isArchived={note.archived}/>
                })}
            </div>) : <div className="notes-list"><p className="notes-list__empty-message">Tidak ada catatan aktif</p></div>}
        </>
    );
}

export default NoteArchive;
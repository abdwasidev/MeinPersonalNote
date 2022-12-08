import React from 'react';

function NoteHeader({ onSearch }) {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <div className="note-search">
                <input type="text" 
                    placeholder="Search Note ..." 
                    onChange={onSearch}
                    />
            </div>
        </div>
    );
}

export default NoteHeader;
function getNoteTemplate(indexNote){
    return `<p>${allNotes.notesTitles[indexNote]} -> ${allNotes.notes[indexNote]}
                <button onclick="noteToArchiv(${indexNote})">Archiv</button>
                <button onclick="noteToTrash(${indexNote})">Trash</button>
            </p>`;
}

function getArchivNoteTemplate(indexArchivNote){
    return `<p>${allNotes.archivNotesTitles[indexArchivNote]} ->${allNotes.archivNotes[indexArchivNote]}
                <button onclick="archivToTrashNote(${indexArchivNote})">Trash</button>
                <button onclick="archivToNote(${indexArchivNote})">Restore</button>
            </p>`;
}

function getTrashNoteTemplate(indexTrashNote){
    return `<p>${allNotes.trashNotesTitles[indexTrashNote]} ->${allNotes.trashNotes[indexTrashNote]}
                <button onclick="deleteNote(${indexTrashNote})">Delete</button>
            </p>`;
}
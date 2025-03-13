function getNoteTemplate(indexNote){
    return `<p>${allNotes.notesTitles[indexNote]} -> ${allNotes.notes[indexNote]}
                <button onclick="moveNote(${indexNote}, 'notes', 'archivNotes')">Archiv</button>
                <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">Trash</button>
            </p>`;
}

function getArchivNoteTemplate(indexArchivNote){
    return `<p>${allNotes.archivNotesTitles[indexArchivNote]} ->${allNotes.archivNotes[indexArchivNote]}
                <button onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')">Trash</button>
                <button onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')">Restore</button>
            </p>`;
}

function getTrashNoteTemplate(indexTrashNote){
    return `<div class="del_note">
                <p>${allNotes.trashNotesTitles[indexTrashNote]} ->${allNotes.trashNotes[indexTrashNote]}</p>
                <div>
                <a onclick="deleteNote(${indexTrashNote})" href="#">delete</a>
                </div>
            </div>`;
}
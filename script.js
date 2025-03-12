let allNotes = {
    'notesTitles' : ['Montag', 'Dienstag'],
    'notes' : ['Einkaufen', 'Geld abheben'],
    'archivNotesTitles' : [],
    'archivNotes' : [],
    'trashNotesTitles' : [],
    'trashNotes' : []
}

function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderArchivNotes(){
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    }
}

function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    allNotes.notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

function noteToArchiv(indexNote){
    let archivNote = allNotes.notes.splice(indexNote, 1);
    let archivNoteTitle = allNotes.notesTitles.splice(indexNote, 1);

    allNotes.archivNotes.push(archivNote[0]);
    allNotes.archivNotesTitles.push(archivNoteTitle[0]);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function noteToTrash(indexNote){
    let trashNote = allNotes.notes.splice(indexNote, 1);
    let trashNoteTitle = allNotes.notesTitles.splice(indexNote, 1);

    allNotes.trashNotes.push(trashNote[0]);
    allNotes.trashNotesTitles.push(trashNoteTitle[0]);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function archivToTrashNote(i){
    let archivTrashNote = allNotes.archivNotes.splice(i, 1);
    let archivTrashNoteTitle = allNotes.archivNotesTitles.splice(i, 1);

    allNotes.trashNotes.push(archivTrashNote[0]);
    allNotes.trashNotesTitles.push(archivTrashNoteTitle[0]);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function archivToNote(indexArchivNote){
    let archivedNote = allNotes.archivNotes.splice(indexArchivNote, 1);
    let archivedNoteTitle = allNotes.archivNotesTitles.splice(indexArchivNote, 1);

    allNotes.notes.push(archivedNote[0]);
    allNotes.notesTitles.push(archivedNoteTitle[0]);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote){
    allNotes.trashNotes.splice(indexTrashNote, 1);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function addOverlay(){
    document.getElementById('overlay').classList.remove('d_none');
}

function removeOverlay(){
    document.getElementById('overlay').classList.add('d_none');
}

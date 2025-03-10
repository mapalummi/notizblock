
// notizen anzeigen lassen

let notesTitles = ['ba', 'Aufgabe'];
let notes = ['Einkaufen', 'Geld abheben'];

let trashNotesTitles = [];
let trashNotes = [];


// -> wann werden sie angezeigt? 
function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}



function getNoteTemplate(indexNote){
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="noteToTrash(${indexNote})">Trash</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote){
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} ->${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">Delete</button></p>`;
}



// notizen hinzufügen
function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}


// notizen löschen
function noteToTrash(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);

    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote){
    trashNotes.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes(); 
}


// notizen archivieren

// notizen anzeigen lassen

let notes = ['Einkaufen', 'Geld abheben'];

// -> wann werden sie angezeigt? 
function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote){
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
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
function deleteNote(indexNote){
    notes.splice(indexNote, 1);
    renderNotes();
}




// notizen archivieren
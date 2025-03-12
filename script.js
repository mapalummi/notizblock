let allNotes = {
    'notesTitles' : ['Montag', 'Dienstag'],
    'notes' : ['Einkaufen', 'Geld abheben'],
    'archivNotesTitles' : [],
    'archivNotes' : [],
    'trashNotesTitles' : [],
    'trashNotes' : []
}

function renderNotes(){
    noteFromLocalStorage();
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderArchivNotes(){
    archiveFromlocalStorage();
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    }
}

function renderTrashNotes(){
    trashFromLocalStorage();
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function addNote(){
    let titleInputRef = document.getElementById('title_input');
    let titleInput = titleInputRef.value;
    
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    
    if (titleInput == "") {
        alert("Titel fehlt");
      } else if (noteInput == "") {
        alert("Text fehlt");
      } else {

    allNotes.notesTitles.push(titleInput);
    allNotes.notes.push(noteInput);

    noteToLocalStorage();
    renderNotes();

    titleInputRef.value = "";
    noteInputRef.value = "";
    }
}

function noteToArchiv(indexNote){
    let archivNote = allNotes.notes.splice(indexNote, 1);
    let archivNoteTitle = allNotes.notesTitles.splice(indexNote, 1);

    allNotes.archivNotes.push(archivNote[0]);
    allNotes.archivNotesTitles.push(archivNoteTitle[0]);

    noteToLocalStorage()
    renderNotes();
    archivToLocalStorage();
    renderArchivNotes();
    trashToLocalStorage();
    renderTrashNotes();
}

function noteToTrash(indexNote){
    let trashNote = allNotes.notes.splice(indexNote, 1);
    let trashNoteTitle = allNotes.notesTitles.splice(indexNote, 1);

    allNotes.trashNotes.push(trashNote[0]);
    allNotes.trashNotesTitles.push(trashNoteTitle[0]);

    noteToLocalStorage()
    renderNotes();
    archivToLocalStorage();
    renderArchivNotes();
    trashToLocalStorage();
    renderTrashNotes();
}

function archivToTrashNote(i){
    let archivTrashNote = allNotes.archivNotes.splice(i, 1);
    let archivTrashNoteTitle = allNotes.archivNotesTitles.splice(i, 1);

    allNotes.trashNotes.push(archivTrashNote[0]);
    allNotes.trashNotesTitles.push(archivTrashNoteTitle[0]);

    noteToLocalStorage()
    renderNotes();
    archivToLocalStorage();
    renderArchivNotes();
    trashToLocalStorage();
    renderTrashNotes();
}

function archivToNote(indexArchivNote){
    let archivedNote = allNotes.archivNotes.splice(indexArchivNote, 1);
    let archivedNoteTitle = allNotes.archivNotesTitles.splice(indexArchivNote, 1);

    allNotes.notes.push(archivedNote[0]);
    allNotes.notesTitles.push(archivedNoteTitle[0]);

    noteToLocalStorage()
    renderNotes();
    archivToLocalStorage();
    renderArchivNotes();
    trashToLocalStorage();
    renderTrashNotes();
}

function deleteNote(indexTrashNote){
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);
    allNotes.trashNotes.splice(indexTrashNote, 1);

    noteToLocalStorage()
    renderNotes();
    archivToLocalStorage();
    renderArchivNotes();
    trashToLocalStorage();
    renderTrashNotes();
}



function noteToLocalStorage(){
    localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
}

function archivToLocalStorage(){
    localStorage.setItem("archivNotesTitles", JSON.stringify(allNotes.archivNotesTitles));
    localStorage.setItem("archivNotes", JSON.stringify(allNotes.archivNotes));
}

function trashToLocalStorage(){
    localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
}


function noteFromLocalStorage(){
    let newTitles = JSON.parse(localStorage.getItem("notesTitles"));
    let newNotes = JSON.parse(localStorage.getItem("notes")); 

    if (newTitles != null && newNotes != null) {
        allNotes.notesTitles = newTitles;
        allNotes.notes = newNotes;
      }
}

function archiveFromlocalStorage(){
    let newArchivTitles = JSON.parse(localStorage.getItem("archivNotesTitles"));
    let newArchivNotes = JSON.parse(localStorage.getItem("archivNotes"));

    if (newArchivTitles != null && newArchivNotes != null) {
        allNotes.archivNotesTitles = newArchivTitles;
        allNotes.archivNotes = newArchivNotes;
      }
}

function trashFromLocalStorage(){
    let newTrashTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
    let newTrashNotes = JSON.parse(localStorage.getItem("trashNotes")); 

    if (newTrashTitles != null && newTrashNotes != null) {
        allNotes.trashNotesTitles = newTrashTitles;
        allNotes.trashNotes = newTrashNotes;
      }
}


function addOverlay(){
    document.getElementById('overlay').classList.remove('d_none');
}

function removeOverlay(){
    document.getElementById('overlay').classList.add('d_none');
}
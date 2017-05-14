const FileSystem = require('fs');

var fetchNotes = ()=>{
  try{
    var notesString = FileSystem.readFileSync('./components/notes-data.json');
    return JSON.parse(notesString);
  }
  catch(e){
    return [];
  }
}
var saveNotes = (notes) =>{
  FileSystem.writeFileSync('./components/notes-data.json', JSON.stringify(notes));
}

var addNotes = (title,body) => {
  var notes = fetchNotes();
  var note ={
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title );

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note; // returns to app.js
  }
}

var getNote = (title)=>{
  var notes = fetchNotes();
  var filteredNote = notes.filter((note)=>  note.title === title); //es6 one line return stmt
  return filteredNote[0];
}
var removeNote = (title) =>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=> note.title !== title);
    saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}
//NOTE TO SELF *** Hey you beuaitful bitch... don't use this function because it requires an exta if statement in app.js.
// Used turnary operator instead with ES6 template strings instead.  1 line v 2 lines PLUS an extra function here.
//so don't use it. Just keep it in commit logs for reference.

// var logNote = (note) =>{
//   console.log('--');
//   console.log(`Title: ${note.title}`);
//   console.log(`Body: ${note.body}`);
// }

module.exports = {
  fetchNotes,
  addNotes,
  getNote,
  removeNote
}

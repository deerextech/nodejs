//modules
const _ = require('lodash');

const yargs = require('./yargsconfig');
const argv = yargs.argv;
const notes = require('./notes');

var command = argv._[0];

var commandFn = () =>{
  if(command === 'add'){
    var note = notes.addNotes(argv.title, argv.body);
    // could also call console.log(`${message}`);
    var message = note ? console.log(`Created note "${note.title}", Body: ${note.body}`) : console.log(`Note title is already taken!`);
  }else if(command === 'list'){
    var allNotes = notes.fetchNotes();
    // console.log('All notes:', allNotes);
    allNotes.forEach((note)=>{
      console.log(`Title: ${note.title}, Body: ${note.body}`);
    })
  }else if(command === 'read'){
    var note = notes.getNote(argv.title);
    var message = returnedNote ? `Note Found:  "${note.title}": ${note.body}` : `Note "${argv.title}" not found` ;
    console.log(`${message}`)
  }else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Note "${argv.title}" was removed` : `Note "${argv.title}" was not found`; //turnary operator to avoid messy if blocks
    console.log(`${message}`);

  }else{
    console.log('command not reconigzed');
  }

  return command
}
module.exports = {
  commandFn
}

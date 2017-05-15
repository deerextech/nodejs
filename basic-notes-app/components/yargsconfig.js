const yargs = require('yargs');

const title = {
  demand:true,
  describe:'Title of note',
  alias:'t'
}
const body = {
  describe:'Contents of note',
  demand: true, // demand = is it requried
  alias:'b'
}

const argv = yargs
.command('add','Adds new note', {
    title, //ES6 short
    body,
})
.command('list','List all notes')
.command('read','Type in title of note to read it',{
  title
})
.command('remove', 'Type in title of note to remove it', {
  title
})
.help()
.argv;

module.exports = {
  yargs,
  title,
  body,
  argv
}

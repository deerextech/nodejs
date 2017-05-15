//module exports
const commandList = require('./components/commandsConfig');


var command = commandList;

if(command){
  command.commandFn();
}else{console.log('Command not recongized')}

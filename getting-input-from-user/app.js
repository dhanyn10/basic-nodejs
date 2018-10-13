const _     = require('lodash');
var command = process.argv[2];
console.log('command: ', command);
console.log(process.argv);

if(command === 'add')
{
    console.log('adding new note');
}
else if(command === 'clear')
{
    console.log('reseting last note');
}
else
{
    console.log('unknown command');
}
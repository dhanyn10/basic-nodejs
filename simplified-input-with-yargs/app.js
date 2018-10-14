const yargs = require('yargs');
const argv  = yargs.argv;
console.log('startng app.js');

const notes = require('./notes.js');
var command = argv._[0];//process.argv[2]

console.log('Command', command);
console.log('Yargs', argv);

if(command === 'add')
{
    notes.addNote(argv.title, argv.body);
}
else if(command === 'list')
{
    notes.getAll();
}
else if(command === 'read')
{
    notes.getNote(argv.title);
}
else if(command === 'remove')
{
    notes.removeNote(argv.title);
}
else
{
    console.log('unknown command');
}
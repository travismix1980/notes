const notes = require('./notes');
const yargs = require('yargs');

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'The notes body',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

// create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'The note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

// create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note');
    }
});

// create a list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler(){
        notes.listNotes();
    }
})

yargs.parse();

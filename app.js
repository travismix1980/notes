const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');

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
    handler: function(argv){
        console.log('Adding a new note!');
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    }
});

// create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
});

// create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note');
    }
});

// create a list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('Listing notes');
    }
})

yargs.parse();

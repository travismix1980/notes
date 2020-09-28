const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'Your notes...';
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });

    if(duplicateNotes.length === 0){
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    }else{
        console.log(chalk.red.inverse('Note title already used please rewrite note with a different title'));
    }
}
const removeNote = function(title){
    const notes = loadNotes();
    const modifiedNotes = notes.filter(function(note){
        return note.title !== title;
    });
    if(notes.length === modifiedNotes.length){
        console.log(chalk.red.inverse('No matching note found to be removed'));
    } else{
        console.log(chalk.green.inverse('Note Removed'));
        saveNotes(modifiedNotes);
    }
}

const saveNotes = function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = function(){
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString());
    }catch(e){
        return [];
    }

}

module.exports = {getNotes, addNote, removeNote};
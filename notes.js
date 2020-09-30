const fs = require('fs');
const chalk = require('chalk');

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log(chalk.green('New note added'));
    } else {
        console.log(chalk.red('Note title already used please rewrite note with a different title'));
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const modifiedNotes = notes.filter((note) => {
        return note.title !== title;
    });
    if (notes.length === modifiedNotes.length) {
        console.log(chalk.red('No matching note found to be removed'));
    } else {
        console.log(chalk.green('Note Removed'));
        saveNotes(modifiedNotes);
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.green('Displaying note titles'));
        notes.forEach((note) => {
            console.log(chalk.whiteBright(note.title));
        });
    } else {
        console.log(chalk.red('No note titles to display'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.green(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red('No matching note found'));
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e) {
        return [];
    }

}

module.exports = {addNote, removeNote, listNotes, readNote};
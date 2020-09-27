const notes = require('./notes');
const chalk = require('chalk');

const msg = notes.getNotes();

console.log(msg);
console.log(chalk.green('Success!'));
console.log(chalk.bgBlue.red.bold('Hello World!'));

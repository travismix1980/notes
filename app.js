const notes = require('./notes');
const chalk = require('chalk');

const msg = notes.getNotes();

console.log(msg);
console.log(chalk.green('Success!'));
console.log(chalk.bgBlue.red.bold('Hello World!'));
console.log(chalk.green('I am a green line ' + chalk.blue.underline.bold('with a blue substring') + ' that becomes green again!'));

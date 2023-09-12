'use strict';

console.log('connected!');

let userName;

function getUserInput() {
  userName = prompt('What is your name?').trim().toLocaleLowerCase();
  console.log('clean user input: ',userName);
}

getUserInput();
alert('Your Name Is ' + userName);

document.write('Hello ' + userName + '!' + ' Welcome to my website!');
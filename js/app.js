'use strict';

console.log('connected!');

//take in some userinput

let userAnswer = prompt('Is my favorite food pizza?: Please respond with yes or no!');

console.log(userAnswer)
// trim removes spaces and lower case will lowercase the input 
let cleanUserAnswer = userAnswer.trim().toLowerCase();

console.log('lowercase and no space: ', cleanUserAnswer);

//we are going to use if else conditons to determine a response to the user

if (cleanUserAnswer === 'yes' || cleanUserAnswer === 'y') {
  alert('you are right!');
} else {
  alert('Wrong');
}

let userName = prompt('What is your name?').trim().toLocaleLowerCase();
console.log(userName);

let emptyArray = [];
console.log(emptyArray);

let quizAnswers = ['c', 'a', 'd','c', 'e', 'c'];

console.log(quizAnswers);


//Methods on arrays. Pop() Push()

//nested arrays

let createNested = [['a'],[], [{}], [{}, 5]];

console.log(createNested);



'use strict';

console.log('connected!');


let userAnswer = prompt('Am I under the age of 25?: Please respond with yes or no!');

console.log(userAnswer)

let cleanUserAnswer = userAnswer.trim().toLowerCase();

console.log('lowercase and no space: ', cleanUserAnswer);

if (cleanUserAnswer === 'yes' || cleanUserAnswer === 'y') {
  alert('you are right!');
} else {
  alert('Wrong');
}
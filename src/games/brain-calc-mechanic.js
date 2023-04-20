import readlineSync from 'readline-sync';
import { getRandomInt, getWrongAnswer } from '../../index.js';

const calcMechanic = (userName) => {
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  let round = 0;
  while (round < 3) {
    let correctAnswer = 0;
    const leftNumber = getRandomInt();
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const rightNumber = getRandomInt();
    console.log(`Question: ${leftNumber} ${operator} ${rightNumber}`);
    switch (operator) {
      case '+':
        correctAnswer = leftNumber + rightNumber;
        break;
      case '-':
        correctAnswer = leftNumber - rightNumber;
        break;
      case '*':
        correctAnswer = leftNumber * rightNumber;
        break;
      default:
        console.log(`This ${operator} is not valid`);
        break;
    }
    const answer = readlineSync.prompt();
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      return getWrongAnswer(answer, correctAnswer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default calcMechanic;

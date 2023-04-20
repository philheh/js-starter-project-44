import readlineSync from 'readline-sync';
import { getRandomInt, getWrongAnswer, getGCD } from '../../index.js';

const gcdMechanic = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  let rounds = 0;
  while (rounds < 3) {
    const number1 = getRandomInt();
    const number2 = getRandomInt();
    console.log(`Question: ${number1} ${number2}`);
    const correctAnswer = getGCD(number1, number2);
    const answer = readlineSync.prompt();
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      rounds += 1;
    } else {
      return getWrongAnswer(answer, correctAnswer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gcdMechanic;

import readlineSync from 'readline-sync';
import { getRandomInt, isEven, getWrongAnswer } from '../index.js';

const evenMechanic = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rounds = 0;
  while (rounds < 3) {
    const randomInt = getRandomInt();
    console.log(`Question: ${randomInt}`);
    const correctAnswer = isEven(randomInt);
    const answer = readlineSync.prompt();
    if ((answer === 'yes' && correctAnswer) || (answer === 'no' && !correctAnswer)) {
      console.log('Correct!');
      rounds += 1;
    } else {
      return getWrongAnswer(answer, correctAnswer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenMechanic;

import readlineSync from 'readline-sync';
import { getWrongAnswer, isPrime, getRandomInt } from '../../index.js';

const primeMechanic = (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let rounds = 0;
  while (rounds < 3) {
    const question = getRandomInt();
    console.log(`Question: ${question}`);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    const answer = readlineSync.prompt();
    if (answer === correctAnswer) {
      console.log('Correct!');
      rounds += 1;
    } else {
      return getWrongAnswer(answer, correctAnswer, userName);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default primeMechanic;

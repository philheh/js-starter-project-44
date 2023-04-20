import readlineSync from 'readline-sync';
import { getWrongAnswer, progressionQuestion } from '../../index.js';

const progressionMechanic = (userName) => {
  console.log('What number is missing in the progression?');
  let rounds = 0;
  while (rounds < 3) {
    const [question, correctAnswer] = progressionQuestion();
    console.log(`Question: ${question}`);
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

export default progressionMechanic;

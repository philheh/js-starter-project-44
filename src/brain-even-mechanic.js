import readlineSync from 'readline-sync';

const evenMechanic = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rounds = 0;
  while (rounds < 3) {
    const randomInt = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomInt}`);
    const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.prompt();
    if ((answer !== 'yes' && answer !== 'no') || answer !== correctAnswer) {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
    }
    console.log('Correct!');
    rounds += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenMechanic;

import readlineSync from 'readline-sync';

const evenMechanic = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rounds = 0;
  while (rounds < 3) {
    const randomInt = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomInt}`);
    const correctAnswer = randomInt % 2 === 0;
    const answer = readlineSync.prompt();
    if (correctAnswer && answer === 'yes') {
      rounds += 1;
      console.log('Correct!');
    } else if (!correctAnswer && answer === 'no') {
      rounds += 1;
      console.log('Correct!');
    } else if (answer === 'yes' && !correctAnswer) {
      return console.log(
        "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!",
      );
    } else if (answer === 'no' && correctAnswer) {
      return console.log(
        "'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, Bill!",
      );
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer ? 'yes' : 'no'}'.\nLet's try again, Bill!`,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenMechanic;

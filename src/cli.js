import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
const welcomeMsg = (str) => {
  readlineSync.setDefaultOptions({ prompt: 'Your answer: ' });
  console.log('Welcome to the Brain Games!');
  return console.log(`Hello, ${str}!`);
};

export { userName, welcomeMsg };

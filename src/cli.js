import readlineSync from 'readline-sync';

export default (function () {
  console.log('Welcome to the Brain Games!');
  readlineSync.setDefaultOptions({ prompt: 'Your answer: ' });
}());
const userName = readlineSync.question('May I have your name? ');
const welcomeMsg = (str) => console.log(`Hello, ${str}!`);

export { userName, welcomeMsg };

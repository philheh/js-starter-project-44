const isEven = (num1, num2 = 2) => num1 % num2 === 0;
const getWrongAnswer = (wronganswer, correctanswer, username) => console.log(
  `'${wronganswer}' is wrong answer ;(. Correct answer was '${correctanswer}'.\nLet's try again, ${username}!`,
);
const getGCD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  let temp = 0;
  while (!isEven(number1, number2)) {
    temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number2;
};
const getRandomInt = (maxIncluded = 100, minExcluded = 0) => {
  const difference = maxIncluded - minExcluded;
  const random = Math.floor(Math.random() * difference) + minExcluded + 1;
  return random;
};
const getProgression = () => {
  const progressionSize = getRandomInt(10, 4);
  let number = getRandomInt(20, 1);
  let nextNum = 0;
  const result = [];
  result.push(number);
  const step = getRandomInt(6, 2);
  for (let i = 0; i < progressionSize - 1; i += 1) {
    nextNum = number + step;
    result.push(nextNum);
    number = nextNum;
  }
  return result;
};
const progressionQuestion = () => {
  const progression = getProgression();
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression.join(' '), correctAnswer];
};

export {
  getRandomInt, isEven, getWrongAnswer, getGCD, getProgression, progressionQuestion,
};

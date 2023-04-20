const getRandomInt = () => Math.floor(Math.random() * 100) + 1;
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

export {
  getRandomInt, isEven, getWrongAnswer, getGCD,
};

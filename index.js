const getRandomInt = () => Math.floor(Math.random() * 100) + 1;
const isEven = (num) => num % 2 === 0;
const getWrongAnswer = (wronganswer, correctanswer, username) => console.log(
  `'${wronganswer}' is wrong answer ;(. Correct answer was '${correctanswer}'.\nLet's try again, ${username}!`,
);
export { getRandomInt, isEven, getWrongAnswer };

import { generateNumberInRange } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const question = generateNumberInRange(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default { description, getData: evenGame };
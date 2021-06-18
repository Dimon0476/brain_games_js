import readlineSync from 'readline-sync';
var userName = '';
export function hello() {
// Wait for user's response.
userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
}
export function brainEven() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 1; i <= 3; i += 1) {
    let num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    let answer = readlineSync.question("Your answer: ");
    
    if ((num % 2) === 0 && answer === 'yes') {
        console.log('Correct!');
    }
    if ((num % 2) === 1 && answer === 'no') {
        console.log('Correct!');
    }
    if ((num % 2) === 1 && answer === 'yes') {
        console.log(`'yes' is wrong answer. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}!`);
        i += 3;
    }
    if ((num % 2) === 0 && answer === 'no') {
        console.log(`'no' is wrong answer. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${userName}!`);
        i += 3;
    }
    if (i === 3) {
        console.log(`Congratulations, ${userName}!`)
    }
    if (answer !== 'yes' && answer !== 'no') {
        console.log(`'${answer}' is wrong answer.`);
        console.log(`Let's try again, ${userName}!`);
        i += 3;
    }
    }
}
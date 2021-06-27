import readlineSync from 'readline-sync';
var userName = '';
export function hello() {
// Wait for user's response.
userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
}
export function brainEven() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 1; i <= 3; i += 1) {
    let num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    let answer = readlineSync.question("Your answer: ");
    
    let prov = false;
    if ((num % 2) === 0 && answer === 'yes') {
        console.log('Correct!');
        prov = true;
    }
    if ((num % 2) === 1 && answer === 'no') {
        console.log('Correct!');
        prov = true;
    }
       
    if (i === 3 && prov) {
        console.log(`Congratulations, ${userName}!`)
    }

    let goodAnswer ='';
    if (num % 2 === 0) {
        goodAnswer = 'yes';
    }
    if (num % 2 !== 0) {
        goodAnswer = 'no';
    }
    if (answer !== 'yes' && answer !== 'no') {
        console.log(`'${answer}' is wrong answer. Correct answer was '${goodAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        i += 3;
    }
    }
}
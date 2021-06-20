import readlineSync from 'readline-sync';
var userName = '';
export function hello() {
// Wait for user's response.
userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
}
export function brainCalc() {
    const oper = ['+', '-', '*'];
    console.log('What is the result of the expression?');
    for (let i = 1; i <= 3; i += 1) {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        var randOper = Math.floor(Math.random() * oper.length);
        console.log(`Question: ${num1} ${oper[randOper]} ${num2}`);
        let answer = Number(readlineSync.question("Your answer: "));

        let answer1;
        switch (oper[randOper]) {
            case '+':
                answer1 = num1 + num2;
                break;
            case '*':
                answer1 = num1 * num2;
                break;
            case '-':
                answer1 = num1 - num2;
                break;
        }
        
        if (answer === answer1) {
            console.log('Correct!');
        }
        if (i === 3) {
            console.log(`Congratulations, ${userName}!`)
        }
        if (answer !== answer1) {
            console.log(`'${answer1}' is wrong answer. Correct answer was '${answer}'`);
            console.log(`Let's try again, ${userName}!`);
            i += 3;
        }
    }
}
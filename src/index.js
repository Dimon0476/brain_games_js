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

export function brainGcd() {
    console.log('Find the greatest common divisor of given numbers.'); 
    for (let i = 1; i <= 3; i += 1) {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        //var randOper = Math.floor(Math.random() * oper.length);
        console.log(`Question: ${num1} ${num2}`);
        let answer = Number(readlineSync.question("Your answer: "));
    
        let a = [num1, num2];
        var n = a.length, x = Math.abs(a[0]);
        for (var j = 1; j < n; j += 1) { 
            var y = Math.abs(a[j]);
            while (x && y) { 
                x > y ? x %= y : y %= x;
            } 
        }
        x += y;   
     // x - просчитан правильный ответ НОК.
     
    if (x === answer) {
        console.log('Correct!');
    }
    if (x !== answer) {
        console.log(`'${answer}' is wrong answer. Correct answer was '${x}'`);
        console.log(`Let's try again, ${userName}!`);
        i += 3;
    }
    if (i === 3) {
        console.log(`Congratulations, ${userName}!`)
    }
    }     
}
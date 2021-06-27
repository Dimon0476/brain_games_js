import readlineSync from 'readline-sync';
var userName = '';
export function hello() {
// Wait for user's response.
console.log('Welcome to the Brain Games!');
userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
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
        if (i === 3 && answer === answer1) {
            console.log(`Congratulations, ${userName}!`)
        }
        if (answer !== answer1) {
            console.log(`'${answer}' is wrong answer. Correct answer was '${answer1}'`);
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

export function brainProgression() {
    console.log('What number is missing in the progression?');

    for (let j = 1; j <= 3; j += 1) {
    let firstNum = Math.floor(Math.random() * 10);
    let step = Math.floor(Math.random() * 10);
    let count = Math.floor(Math.random() * 10);
    if (count < 5) {
        count = 5;
    }
    if (firstNum === 0) {
        firstNum = 1;
    }
    if (step === 0) {
        step = 1;
    }

    let progress = [firstNum];

    for (let i = 1; i <= count; i += 1) {
        progress[i] = firstNum + step;
        firstNum += step;
    }
    
    // случайное число от 0 до (count+1) случайный индекс массива
    let rand = Math.random() * (count + 1);
    rand = Math.floor(rand);
    //правильный ответ:
    const correctAnswer = progress[rand];
    // заменяем правильный ответ на ... в прогрессии
    progress[rand] = '...';
    console.log(progress);

    let answer = Number(readlineSync.question("Your answer: "));

    if (correctAnswer === answer) {
        console.log('Correct!');
    }
    if (correctAnswer !== answer) {
        console.log(`'${answer}' is wrong answer. Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${userName}!`);
        j += 3;
    }
    if (j === 3) {
        console.log(`Congratulations, ${userName}!`)
    }
    }   
}

export function brainPrime() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 1; i <= 3; i += 1) {
        let num = Math.floor(Math.random() * 100);
        console.log(`Question: ${num}`);
        let answer = (readlineSync.question("Your answer: "));

        
        //Определяем простое ли число. Истина - простое, ложь - нет.
        let flag = true;
        for (let j = 2; j < num; j += 1) {
	        if (num % j === 0) {
		        flag = false; // если хотя бы один раз поделилось
	        }
        }

        if (flag && answer === 'yes') {
            console.log('Correct!');
        } 
        if (!flag && answer === 'no') {
            console.log('Correct!');
        }
        if (flag && answer === 'no') {
            console.log(`'${answer}' is wrong answer. Correct answer was 'yes'`);
            console.log(`Let's try again, ${userName}!`);
            i += 3;
        }
        if (!flag && answer === 'yes') {
            console.log(`'${answer}' is wrong answer. Correct answer was 'no'`);
            console.log(`Let's try again, ${userName}!`);
            i += 3;
        }
        if (i === 3) {
            console.log(`Congratulations, ${userName}!`)
        }
    }
}
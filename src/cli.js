import readlineSync from 'readline-sync';
export function hello() {
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
}

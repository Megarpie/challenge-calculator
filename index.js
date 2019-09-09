
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please insert number(s): '
});

/*
Step 1:
Support a maximum of 2 numbers using a comma delimiter
*/
const addTwo = (str) => {
  // check if string is empty first, return 0 if so
  if (!str) {
    return 0;
  }

  // convert string into number array
  const numArray = str.split(',').map(Number);

  // // max of two numbers only
  return numArray.slice(0,2).reduce((x,y) => numberCheck(x) + numberCheck(y), 0);
}

// checks if number is NaN, return 0 if so
const numberCheck = (num) => {
  return Number.isNaN(num) ? 0 : num;
}

rl.prompt();

rl.on('line', (line) => {
  const number = addTwo(line);
  console.log('Your sum is: ', number);
  process.exit(0);
}).on('close', () => {
  process.exit(0);
});

exports.addTwo = (str) => addTwo(str);
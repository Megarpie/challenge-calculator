
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please insert number(s): '
});

/*
Step 2:
Support an unlimited number of numbers
*/
const addStringCalculator = (str) => {
  // check if string is empty first, return 0 if so
  if (!str) {
    return 0;
  }

  // convert string into number array
  const numArray = str.split(',').map(Number);

  return numArray.reduce((x,y) => numberCheck(x) + numberCheck(y), 0);
}

// checks if number is NaN, return 0 if so
const numberCheck = (num) => {
  return Number.isNaN(num) ? 0 : num;
}

rl.prompt();

rl.on('line', (line) => {
  const number = addStringCalculator(line);
  console.log('Your sum is: ', number);
  process.exit(0);
}).on('close', () => {
  process.exit(0);
});

exports.add = (str) => addStringCalculator(str);
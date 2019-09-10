
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please insert number(s): '
});

/*
Step 5:
Ignore any number greater than 1000
*/
const addStringCalculator = (str) => {

  // check if string is empty first, return 0 if so
  if (!str) {
    return 0;
  }

  // replace all occurances of new line with comma
  // convert string into number array
  const replaceNewLine = str.replace(/\\n/g, ',');
  const numArray = replaceNewLine.split(',').map(Number);

  return calculateSum(numArray);
}

// checks if number is NaN, return 0 if so
const numberCheck = (num) => {
  return Number.isNaN(num) ? 0 : num;
}

// calculate sum
const calculateSum = (arr) => {
  const maxNumber = 1000;
  const negativeNums = new Array();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const number = numberCheck(arr[i]);
    // check for negative numbers
    if (number < 0) {
      negativeNums.push(number)
    }
    // only add numbers less than or equal to max number
    if (number <= maxNumber) {
      sum += number;
    }
  }

  // throw error with negative numbers
  if (negativeNums.length > 0) {
    throw new Error("Negative numbers not allowed: " + negativeNums.toString());
  }

  return sum;
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
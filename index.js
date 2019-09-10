
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please insert number(s): '
});

/*
Step 3:
Support a newline character as an alternative delimiter
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

  // check for negative numbers
  const negativeNums = numArray.filter(n => n < 0);
  if (negativeNums.length > 0) {
    throw new Error("Negative numbers not allowed: " + negativeNums.toString());
  }

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
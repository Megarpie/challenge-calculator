
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please insert number(s): '
});

/*
Step 7:
Support 1 custom delimiter of any length
*/
const addStringCalculator = (str) => {

  // check if string is empty first, return 0 if so
  if (!str) {
    return 0;
  }

  // replace all occurances of new line and custom delimiters with comma
  // convert string into number array
  const replaceDelimiters = parseDelimiter(str);
  const numArray = replaceDelimiters.split(',').map(Number);

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
    throw new Error('Negative numbers not allowed: ' + negativeNums.toString());
  }

  return sum;
}

// parse and replace delimiters with comma
const parseDelimiter = (str) => {
  const checkCustomDelimiter = str.trim().substring(0,2);
  let replacedStr = '';

  // check for custom delimiters
  if (checkCustomDelimiter === '//') {
    // find custom delimiter
    let delimiterRegex = str.match(/(?<=\/\/)(.*?)(?=\\n)/g).toString();

    // check for any length custom delimiter
    if (delimiterRegex.startsWith('[')) {
      delimiterRegex = delimiterRegex.substring(1, delimiterRegex.length -1);
    }

    const pattern = new RegExp(escapeRegExp(delimiterRegex), 'g');

    // extract string that needs to be added 
    numStr = str.substring(str.indexOf('\\n') + 2).trim();
    replacedStr = numStr.replace(pattern, ',').replace(/\\n/g, ',');
    
    return replacedStr;
  } else {
    return str.replace(/\\n/g, ',');
  }
}

// escape special characters
const escapeRegExp = (str) => {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
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
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//Or

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//Or

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

function positiveSum(arr) {}

// ??
function positiveSum(arr) {
  return arr.reduce((a, b) => {
    a + (b > 0 ? b : 0);
  }, 0);
}

// Our football team finished the championship. The result of each match looks like “x:y”. Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y – 3 points
// if x<y – 0 point
// if x=y – 1 point

function points(games) {
  var sum = 0;
  for (var i = 0; i < games.length; ++i) {
    if (games[i][0] > games[i][2]) sum += 3;
    if (games[i][0] == games[i][2]) sum += 1;
  }
  return sum;
}

//Or

const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
//---------------------------

function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return -Math.abs(num);
  }
}

function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num < 0 ? num : -num;
}

function makeNegative(num) {
  return num > 0 ? -num : num;
}

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split("").reverse().join("");
}

function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

reverseString("hello");

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:  -1  1

function opposite(number) {
  return -number;
}

function opposite(number) {
  return number * -1;
}

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):

function numberToString(num) {
  return num.toString();
}

//-----

function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

//-----

const numberToString = (num) => `${num}`;

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  str.toString();
  return str.slice(1, -1);
}

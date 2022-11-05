function repeatStr(n, s) {
  if (n > 0) return s.repeat(n);
  else return "";
}

function repeatStr(n, s) {
  return s.repeat(n);
}

//   Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

// ??
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

//   Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.replace(/ /g, "");
}

function noSpace(x) {
  return x.split(" ").join("");
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

let cars = [
  {
    year: 2000,
    model: "BMW",
    color: "grey",
  },
  {
    year: 2001,
    model: "BMW1",
    color: "black",
  },
  {
    year: 2002,
    model: "BMW2",
    color: "white",
  },
  {
    year: 2003,
    model: "BMW3",
    color: "red",
  },
];

const arrFunc = (x) => {
  console.log(...x);
  console.log(Math.max(...x).toString().length);
};

function arrFunction(x) {
  let maxNumber = 0;
  for (let i = 0; i < x.length; i++) {
    if (maxNumber < x[i]) {
      maxNumber = x[i];
    }
  }
  console.log(maxNumber.toString().length);
}

arrFunction([1, 234, 45678, 222345, 56]);

let num = 0;

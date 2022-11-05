// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  const results = [];
  for (let i = n; i > 0; i--) {
    results.push(i);
  }
  return results;
};

const reverseSeq1 = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

////// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

const reverseSeq2 = (length) => Array.from({ length }, () => length--);

const reverseSeq3 = (num) => {
  return new Array(num)
    .fill()
    .map((d, i) => i + 1)
    .reverse();
};

//   8 kyu
//   Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
  return name;
}

function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

//   Reversed Words

//   Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
  // reverse those words
}

//   Sum Arrays
//   Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((a, b) => {
    return a + b;
  }, 0);
}

// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var bmi = weight / height / height;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";

//  Beginner - Reduce but Grow

//  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 🌻

function grow(x) {
  return x.reduce((a, b) => {
    return a * b;
  }, 1);
}

const grow = (x) => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};

//   Write a function which converts the input string to uppercase. 🌻

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

//Jenny's secret message 🌻

//   Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

// Simple multiplication 🌻

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return Number(mpg * fuelLeft >= distanceToPump) ? true : false;
};

///Is he gonna survive? 🌻

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

//Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  //Get Coding!

  return bullets >= dragons * 2 ? true : false;
}

//DNA to RNA Conversion
//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example: //"GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//Array plus array   ⚠️

//'m new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help. P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur); //something went wrong
}

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}

function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a, b) => a + b, 0);
}

//If you can't sleep, just count sheep!!
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let countSheep1 = function (num) {
  //your code here
  let sheep = "";
  for (let i = 1; i <= num; i++) {
    sheep += i.toString() + " sheep...";
  }
  return sheep;
};

countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;
////// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

const countSheep2 = (length) =>
  Array.from({ length }, (_, i) => ++i + " sheep...").join("");

//Get the mean of an arra
//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

function getAverage(marks) {
  var sum = 0;

  for (var i in marks) sum += marks[i];

  return parseInt(sum / marks.length);
}

function getAverage(marks) {
  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return Math.floor(total / marks.length);
}

// let promise1 = 2;
// let promise2 = 10;
// let promise3 = "number";

// async function asyncFunc() {
//   let result1 = await promise1;
//   let result2 = await setTimeout(() => {
//     return 5;
//   }, 1000);
//   let result3 = await promise3;

//   console.log(result1);
//   console.log(result2);
//   console.log(result3);
// }
// asyncFunc();

//Find Maximum and Minimum Values of a List 🌻
// [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//Count by X

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

//⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

//rock, scissors, paper

// const rpsu = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

// const rpsu = (p1, p2) => {
//   if (p1 == p2) return "Draw!";

//   if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
//   else if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
//   else if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
//   else return "Player 2 won!";
// };

//Examples (Input ==> Output): 🌻
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split(" ");
}

//Sum without highest and lowest number /⚠️//❇️
// //Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// { 6, 2, 1, 8, 10 } => 16

const sumNums = (acc, cur) => acc + cur;

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce(sumNums, 0) - Math.min(...array) - Math.max(...array)
    : 0;
}

sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;

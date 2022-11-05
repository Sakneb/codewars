// 1.
// Counting sheep...

// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

function countSheeps(arrayOfSheep1) {
  // TODO May the force be with you

  let count = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count += 1;
    }
  }
  return count;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function countSheeps(arrayOfSheeps2) {
  return arrayOfSheeps.filter(Boolean).length;
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function countSheeps(arrayOfSheep3) {
  var count = 0;

  arrayOfSheep.forEach(function (sheep1) {
    if (sheep) count++;
  });

  return count;
};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~(
  // let countSheeps = x => x.filter( s => s ).length;

  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a, b) => a + (b === true ? 1 : 0), 0);
    return array;
  }
);

//   Century From Year
//   Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
//❇️

function century(year) {
  let result = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      result++;
    }
  }
  return result;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function century(year) {
  return Math.ceil(year / 100);
};

//   Is n divisible by x and y?

//   Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}

//   Abbreviate a Two Word Name
//   DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  let names = name.split(" ");

  return (
    names[0].charAt(0).toUpperCase() + "." + names[1].charAt(0).toUpperCase()
  );
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function abbrevName(name) {
  return name
    .split(" ")
    .map((x) => x.substr(0, 1).toUpperCase())
    .join(".");
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function abbrevName(name) {
  return (
    name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase()
  );
};

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }

  // Code
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function basicOp(o, a, b) {
  return eval(a + o + b); //never use eval❇️
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Operation must be one of + - * /";
  }
};

// DESCRIPTION:
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

function litres(time) {
  Number(time);
  return Math.floor(time * 0.5);
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function litres(time) {
  return parseInt(time / 2);
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~(
  //❇️

  function litres(time) {
    return time >> 1;
  }
);

//❇️

litres = (time) => ~~(time * 0.5);

0000 - 0;
0001 - 1;
0010 - 2;
0011 - 3;
0100 - 4;
0101 - 5;
0110 - 6;
0111 - 7;

//       Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//

function digitize(n) {
  return [...String(n)].map(Number).reverse();
}

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

function digitize(n) {
  const str = n.toString();
  const intConverter = (item) => parseInt(item);
  return Array.from([...str].reverse(), intConverter);
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function digitize(n) {
  return (n + "").split("").map(Number).reverse();
}

// Convert a String to a Number!
// "1234" --> 1234

const stringToNumber2 = function (str) {
  return Number(str);
};

//❇️

let stringToNumber = function (str) {
  return +str;
};

// Given an array of integers, return a new array with each value doubled.

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  return x.map((n) => n * 2);
}

function maps(x) {
  //return x.map(el => el * 2);
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}

// A Needle in the Haystack
// it should return "found the needle at position 6"

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

function findNeedle(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "needle") return "found the needle at position " + i;
  }
  // your code here
}

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?"

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// Function 1 - hello world

function greet() {
  return "hello world!";
}

const greet = () => "hello world!";

// //   *             __
//           .'  '.
//          :      :
//          | _  _ |
//       .-.|(o)(o)|.-.        _._          _._
//      ( ( | .--. | ) )     .',_ '.      .' _,'.
//       '-/ (    ) \-'     / /' `\ \ __ / /' `\ \
//        /   '--'   \     / /     \.'  './     \ \
//        \ `"===="` /     `-`     : _  _ :      `-`
//         `\      /'              |(o)(o)|
//           `\  /'                |      |
//           /`-.-`\_             /        \
//     _..:;\._/V\_./:;.._       /   .--.   \
//   .'/;:;:;\ /^\ /:;:;:\'.     |  (    )  |
//  / /;:;:;:;\| |/:;:;:;:\ \    _\  '--'  /__
// / /;:;:;:;:;\_/:;:;:;:;:\ \ .'  '-.__.-'   `-.
// */const greet = () => "hello world!";

//Beginner Series #2 Clock
//

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

//Count of positives / sum of negatives  ❇️
[2, 34, -10, 7];
function countPositivesSumNegatives(input) {
  // your code here
  let positive = 0;
  let negative = 0;
  if (input === null || input.length < 1) return [];
  input.forEach((v) => (v > 0 ? positive++ : (negative += v)));
  return [positive, negative];
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) positive++;
    else negative += input[i];
  }

  return [positive, negative];
};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function countPositivesSumNegatives(input) {
  return input && input.length
    ? input.reduce(
        function (p, c, i, s) {
          c <= 0 ? (p[1] += c) : (p[0] += 1);
          return p;
        },
        [0, 0]
      )
    : [];
};

//Opposites Attract  ❇️
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
  return array.map((i) => -i);
}

function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}

//   Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

//   DESCRIPTION:  ❇️
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

const check = (a, x) => a.includes(x);

function checkArray(a, x) {
  return a.find((i) => i === x) ? true : false;
}

checkArray([1, 2, 4], 3);

// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let output = "";
  for (let i = 0; i < x.length; i += 1) {
    if (x[i] < 5) {
      output += 0;
    } else {
      output += 1;
    }
  }
  return output;
}

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

const fakeBin = (x) => [...x].reduce((a, b) => a + ~~(+b / 5), ""); //❇️

// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length > 0) {
    let average = array.reduce((a, b) => a + b) / array.length;
    return average;
  } else {
    return 0;
  }
}

var find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  var result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}

//   There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
///❇️

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++) {
    classAvg += classPoints[i];
  }
  classAvg = classAvg / classPoints.length;
  return yourPoints > classAvg;
}

function betterThanAverage(classPoints, yourPoints) {
  const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
  const classAverage = classPointsSum / classPoints.length;
  const isBetter = yourPoints > classAverage;
  return isBetter;
}

function betterThanAverage(classPoints, yourPoints) {
  const allPoints = [yourPoints, ...classPoints];
  const average = allPoints.reduce((acc, val) => acc + val) / allPoints.length;

  return yourPoints > average;
}

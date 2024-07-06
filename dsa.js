/** @format */

//1. isPalandrome  -------------------------------------------------------------------------

function isPalandrome(x) {
  return x < 0 ? false : x === Number(x.toString().split("").reverse().join(""));
}
// console.log(isPalandrome(121))

//2. Fibonacci Number  ---------------------------------------------------------------------

const fibArray = [0, 1];
const numLength = 5;
function FibonacciNumber(numLength) {
  for (let i = 2; i <= numLength - 1; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]); //first method
    // fibArray[i] = fibArray[i - 1] + fibArray[i - 2];   //second method
  }
  return fibArray;
}
const d = FibonacciNumber(numLength);
// console.log(d);

//3. nth Fibonacci number  ----------------------------------------------------------------

const n = 10;
function fib(n) {
  const fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray[n];
}
const data = fib(n);
// console.log(data);

//3. second method using recursion  --------------------------------------------------------

const fib2 = function (n) {
  if (n == undefined) return 0;
  if (n <= 1) return n;
  return fib2(n - 1) + fib2(n - 2);
};
// console.log(fib(20));

//4. find uniq number and also repated number  ----------------------------------------------

const nums = [5, 1, 3, 4, 2, 2, 5, 1];
let uniqArr = [];
let repetNumber = [];

const repetNum = () => {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] !== uniqArr.find((num) => num == nums[i])) {
      uniqArr.push(nums[i]);
    } else {
      repetNumber.push(nums[i]);
    }
  }
  // console.log("uniqArr: ", uniqArr)
  // console.log("repetNumber: ", repetNumber)
};
repetNum();

//5. isOppositeSame  -----------------------------------------------------------------------

const isOpposite = function (a, b) {
  return (
    Array(...a)
      .reverse()
      .join("") === b
  );
};
const res = isOpposite("satya", "ayas");
// console.log(res)

//6. isAnagram

const isAnagtam = function (a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
};
// console.log(isAnagtam("satya", "ysata"))

//7. find the second largest number  -------------------------------------------------------

var arr = [19, 32, 32, 23, 14, 33, 33, 5];
const secondLargestNum = function (x) {
  //first method
  const data = x.sort((a, b) => a - b);
  const lastNum = data[data.length - 1];
  const secondLargestNumber = data.findLast((a) => a < lastNum);
  console.log("secondLargestNumber: ", secondLargestNumber);

  //second method
  const uniqArr = new Set(x); //remove duplicate
  const sortedArr = Array.from(uniqArr).sort((a, b) => a - b);
  const secondLargestNum = sortedArr[sortedArr.length - 2];
  console.log("secondLargestNum: ", secondLargestNum, typeof secondLargestNum);
};
// secondLargestNum(arr)

//8. rotate array from last nth number  -----------------------------------------------------

let arr1 = ["1", "2", "3", "4", "5", "6", "7"];
const oppositeFrom = function (arr1, nth) {
  const lastNthNum = arr1.splice(arr1.length - nth);
  console.log("lastNthNum: ", lastNthNum);
  arr1.unshift(...lastNthNum);
  console.log(arr1);
};
// oppositeFrom(arr1, 2);

//9. objects in javascript practice --------------------------------------------------------

const students = [
  {name: "neha", age: 44, gender: "female"},
  {name: "satya", age: 20, gender: "male"},
  {name: "shubham", age: 22, gender: "male"},
  {name: "shivam", age: 21, gender: "male"},
  {name: "priyanshi", age: 18, gender: "female"},
  {name: "raginee", age: 28, gender: "female"},
  {name: "saumya", age: 4, gender: "female"},
  {name: "lala", age: 36, gender: "male"},
];

//all students whose age is greater than 20
const greater20Age = students.filter((stu) => stu.age > 20);
// console.log(greater20Age);

// age greater than 20 and accending order
const ageAccendingOrder = greater20Age.sort((a, b) => a.age > b.age);
// console.log(ageAccendingOrder)

// age greater then 20 and should be male
const maleStudents = students.filter((stu) => stu.age > 20 && stu.gender === "male");
// console.log(maleStudents);

//max age student
const maxAgeStu = students.sort((a, b) => a.age > b.age)[students.length - 1];
// console.log(maxAgeStu)

//max age male student
const allMale = students.filter((stu) => stu.gender === "male"); //all male student
const accendingAge = allMale.sort((a, b) => a.age > b.age); // accending age order of all male student
// console.log(accendingAge[allMale.length -1 ]);

//10. find the first max length of word on a sentence/---------------------------------------

const sentence = "Lorem ipsum dolor sit amet consecteturg adipisicing elitaiauwe";
const maxLengthWord = sentence.split(" ").sort((a, b) => b.length - a.length)[0];
// console.log(maxLengthWord, '-', maxLengthWord.length);

//second method
const senArray = sentence.split(" ");
const maxLengthWord2 = senArray.reduce((longentWord, curr) => {
  return longentWord.length < curr.length ? curr : longentWord;
});
// console.log(maxLengthWord2);

//11. In sentence all words first letter should be capitilize------------------------------------

const st = "i am satya divedi and i am from india.";
const stArr = st
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)))
  .join(" ");
// console.log(stArr);

//12. count how much time the letter is printed on a word-----------------------------------------------

let word = "pinnapllan";
let repetLetter = "l";

const countRepetLetterInWord = word.split("").reduce((acc, curr) => {
  if (curr == repetLetter) {
    acc++;
  }
  return acc;
}, 0);
// console.log(countRepetLetterInWord);

//13. count how much letters in any array and set it in Obj-----------------------------------------------

let array = ["f", "a", "b", "a", "c", "b", "a", "d", "b", "f"];
const obj = array.reduce((acc, curr) => {
  if (curr in acc) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
// console.log(obj);

//second method
let obj2 = {};
array.forEach((letter) => {
  if (letter in obj2) {
    obj2[letter]++;
  } else {
    obj2[letter] = 1;
  }
});
// console.log(obj2);

//14. reverse a string------------------------------------------------------------------------------

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
// console.log(reverseString('uhelloo'));

//15. store unique value from an array----------------------------------------------------------------

const arrForUniq = [11, 2, 11, 3, 2, 1, 37, 11, 44, 5, 7, 5, 11];
//firse mathod
const uniqueArr = () => {
  const uni = arrForUniq.filter((num, index, self) => {
    return self.indexOf(num) === index;
  });
  console.log(uni);
};
// uniqueArr()

//second mathod
const uniqArray = () => {
  const uniqArr = [arrForUniq[0]];
  for (let i = 1; i <= arrForUniq.length - 1; i++) {
    const isAlready = uniqArr.indexOf(arrForUniq[i]);
    if (isAlready == -1) {
      uniqArr.push(arrForUniq[i]);
    }
  }
  console.log(uniqArr);
};
uniqArray();

//16. isAnyNumRepeted--------------------------------------------------------------------------------------

var arr = [1, 2, 2, 1, 1, 3]; //=> true
var arr2 = [1, 2, 1]; //=> true
var arr3 = [1, 2, 3, 4, 5]; //=> false

var isRepetedLetter = function (recArr) {
  return [...new Set(recArr)].length !== recArr.length;
};
console.log(isRepetedLetter(arr3));

// here i am stating dsa which is given by cuvette course

// 1. Logic-1 > cigarParty----------------------------------------------------------------------------------

/*When squirrels get together for a party, they like to have cigars.
 A squirrel party is successful when the number of 
 cigars is between 40 and 60, inclusive. Unless it is the weekend,
  in which case there is no upper bound on the number of cigars. 
  Return true if the party with the given values is successful, 
  or false otherwise*/

// cigarParty(30, false) → false
// cigarParty(50, false); → true
// cigarParty(70, true); → true
// cigarParty(30, true) → false
// cigarParty(50, true) → true

function cigarParty(cigars, isWeekend) {
  if (isWeekend && cigars >= 40) {
    return true;
  } else if (!isWeekend && cigars >= 40 && cigars <= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(cigarParty(30, false));
console.log(cigarParty(50, false));
console.log(cigarParty(70, true));
console.log(cigarParty(30, true));

// 2. Logic-1 > dateFashion----------------------------------------------------------------------------------

/*
You and your date are trying to get a table at a restaurant.
 The parameter "you" is the stylishness of your clothes,
  in the range 0..10, and "date" is the stylishness of your date's clothes.
   The result getting the table is encoded as an int value with 0=no, 
   1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the 
   result is 2 (yes). With the exception that if either of you has style of 
   2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).
*/
// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1
// dateFashion(10, 2) → 0
// dateFashion(2, 9) → 0

function dateFashion(you, date) {
  if ((you >= 8 && date > 2) || (date >= 8 && you > 2)) {
    return 2;
  } else if (you <= 2 || date <= 2) {
    return 0;
  } else {
    return 1;
  }
}

console.log(dateFashion(5, 10));
console.log(dateFashion(5, 2));
console.log(dateFashion(5, 5));
console.log(dateFashion(10, 2));
console.log(dateFashion(2, 9));

// 3. Logic-1 > squirrelPlay----------------------------------------------------------------------------------

/*
The squirrels in Palo Alto spend most of the day playing. 
In particular, they play if the temperature is between 60 and 90 (inclusive). 
Unless it is summer, then the upper limit is 100 instead of 90. 
Given an int temperature and a boolean isSummer, 
return true if the squirrels play and false otherwise.
*/

// squirrelPlay(70, false) → true
// squirrelPlay(95, false) → false
// squirrelPlay(95, true) → true

function squirrelPlay(temp, isSummer) {
  if (isSummer && temp >= 60 && temp <= 100) {
    return true;
  } else if (temp >= 60 && temp <= 90) {
    return true;
  } else {
    return false;
  }
}

console.log(squirrelPlay(70, false));
console.log(squirrelPlay(95, false));
console.log(squirrelPlay(95, true));

// 4. Logic-1 > sortaSum----------------------------------------------------------------------------------

/*
Given 2 ints, a and b, return their sum. 
However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.
*/

// sortaSum(3, 4) → 7
// sortaSum(9, 4) → 20
// sortaSum(10, 11) → 21

function sortaSum(a, b) {
  if (a + b >= 10 && a + b <= 19) {
    return 20;
  } else {
    return a + b;
  }
}

console.log(sortaSum(3, 4));
console.log(sortaSum(9, 4));
console.log(sortaSum(10, 11));


// 5. Logic-1 > alarmClock----------------------------------------------------------------------------------


/*

Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, 
and a boolean indicating if we are on vacation, 
return a string of the form "7:00" indicating when the alarm clock 
should ring. Weekdays, the alarm should be "7:00" 
and on the weekend it should be "10:00". 
Unless we are on vacation -- then on weekdays it should be 
"10:00" and weekends it should be "off".
*/

// alarmClock(1, false) → "7:00"
// alarmClock(5, false) → "7:00"
// alarmClock(0, false) → "10:00"
// alarmClock(0, true) → "off"

function alarmClock(day, vacation) {
  if (vacation) {
    return day === 0 || day === 6 ? "off" : "10:00";
  } else {
    return day === 0 || day === 6 ? "10:00" : "7:00";
  }
}

console.log(alarmClock(1, false));
console.log(alarmClock(5, false));
console.log(alarmClock(0, false));
console.log(alarmClock(0, true));

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

/*When squirrels get together for a party, they like to have cigars.A squirrel party is successful when the number of 
 cigars is between 40 and 60, inclusive. Unless it is the weekend,in which case there is no upper bound on the number of cigars. 
Return true if the party with the given values is successful, or false otherwise*/

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
You and your date are trying to get a table at a restaurant.The parameter "you" is the stylishness of your clothes,
in the range 0..10, and "date" is the stylishness of your date's clothes.The result getting the table is encoded as an int value with 0=no, 
1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 
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
The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). 
Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, 
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
Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive,
are forbidden, so in that case justreturn 20.
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
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, 
return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" 
and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be 
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

// 6. Logic-1 > love6----------------------------------------------------------------------------------

/*
The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. 
Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.
*/

// love6(6, 4) → true
// love6(4, 5) → false
// love6(1, 5) → true

function love6(a, b) {
  if (a == 6 || b == 6 || Math.abs(a - b) == 6 || a + b == 6) {
    return true;
  } else {
    return false;
  }
}

console.log(love6(6, 4));
console.log(love6(4, 5));
console.log(love6(1, 5));

// 7. Logic-1 > in1To10----------------------------------------------------------------------------------

/*
Given a number n, return true if n is in the range 1..10, inclusive. 
Unless outsideMode is true, in which case return true if the number is less or
equal to 1, or greater or equal to 10.
*/

// in1To10(5, false) → true
// in1To10(11, false) → false
// in1To10(11, true) → true

function in1To10(n, outsideMode) {
  if (outsideMode) {
    return n <= 1 || n >= 10;
  } else {
    return n >= 1 && n <= 10;
  }
}

console.log(in1To10(5, false));
console.log(in1To10(11, false));
console.log(in1To10(11, true));

// 8. Logic-1 > specialEleven----------------------------------------------------------------------------------

/*
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11.
Return true if the given non-negative number is special.
*/

// specialEleven(22) → true
// specialEleven(23) → true
// specialEleven(24) → false

function specialEleven(n) {
  return n % 11 == 0 || n % 11 == 1;
}

console.log(specialEleven(22));
console.log(specialEleven(23));
console.log(specialEleven(24));

// 9. Logic-1 > more20----------------------------------------------------------------------------------

/*
Return true if the given non-negative number is 1 or 2 more than a multiple of 20
*/

// more20(20) → false
// more20(21) → true
// more20(22) → true

function more20(n) {
  return n % 20 == 1 || n % 20 == 2;
}

console.log(more20(20));
console.log(more20(21));
console.log(more20(22));

// 10. Logic-1 > old35----------------------------------------------------------------------------------

/*
Return true if the given non-negative number is a multiple of 3 or 5, but not both.
*/

// old35(3) → true
// old35(10) → true
// old35(15) → false

function old35(n) {
  if (n % 3 == 0 && n % 5 == 0) return false;
  return n % 3 == 0 || n % 5 == 0;
}

console.log(old35(3));
console.log(old35(10));
console.log(old35(15));

// 10. Logic-1 > less20----------------------------------------------------------------------------------

/*
Return true if the given non-negative number is 1 or 2 less than a multiple of 20. 
So for example 38 and 39 return true, but 40 returns false.
*/

// less20(18) → true
// less20(19) → true
// less20(20) → false

function less20(n) {
  if (n % 20 == 0) {
    return false;
  }
  return (n + 1) % 20 == 0 || (n + 2) % 20 == 0;
}

console.log(less20(18));
console.log(less20(19));
console.log(less20(20));
console.log(less20(38));
console.log(less20(39));
console.log(less20(40));

// 11. Logic-1 > nearTen----------------------------------------------------------------------------------

/*
Given a non-negative number "num", return true if num is within 2 of a multiple of 10.
Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.
*/

// nearTen(12) → true
// nearTen(17) → false
// nearTen(19) → true

function nearTen(num) {
  return num % 10 == 0 || (num + 1) % 10 == 0 || (num + 2) % 10 == 0 || (num - 1) % 10 == 0 || (num - 2) % 10 == 0;
}

console.log(nearTen(12));
console.log(nearTen(17));
console.log(nearTen(19));

// 12. Logic-2 > makeBricks----------------------------------------------------------------------------------

/*
We want to make a row of bricks that is goal inches long. We have a number of small bricks 
(1 inch each) and big bricks (5 inches each). Return true if it is possible to make the 
goal by choosing from the given bricks. This is a little harder than it looks and can be 
done without any loops.
*/

// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true
// makeBricks(7, 1, 11) → true
// makeBricks(3, 2, 8) → true
// makeBricks(1, 4, 11) → true

function makeBricks(small, big, goal) {
  const needBigBricks = Math.min(Math.floor(goal / 5), big);
  const needAfterBigBricks = goal - needBigBricks * 5;
  return needAfterBigBricks <= small;
}

console.log(makeBricks(3, 6, 18));
console.log(makeBricks(3, 1, 9));
console.log(makeBricks(3, 2, 10));
console.log(makeBricks(7, 1, 11));
console.log(makeBricks(3, 2, 8));
console.log(makeBricks(1, 4, 11));

// 13. Logic-2 > loneSum----------------------------------------------------------------------------------

/*
Given 3 int values, a b c, return their sum. However, 
if one of the values is the same as another of the values, 
it does not count towards the sum.
*/
// loneSum(1, 2, 3) → 6
// loneSum(3, 2, 3) → 2
// loneSum(3, 3, 3) → 0

function loneSum(a, b, c) {
  if (a == b && b == c) {
    return 0;
  }
  if (a == b) {
    return c;
  }
  if (b == c) {
    return a;
  }
  if (a == c) {
    return b;
  } else {
    return a + b + c;
  }
}

console.log(loneSum(1, 2, 3));
console.log(loneSum(3, 2, 3));
console.log(loneSum(3, 3, 3));

// 14. Logic-2 > luckySum----------------------------------------------------------------------------------

/*
Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the 
sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.
*/
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c) {
  if (a != 13 && b != 13 && c != 13) {
    return a + b + c;
  } else {
    if (a == 13) {
      return 0;
    }
    if (b == 13) {
      return a;
    } else {
      return a + b;
    }
  }
}

console.log(luckySum(1, 2, 3));
console.log(luckySum(1, 2, 13));
console.log(luckySum(1, 13, 3));

// 15. Logic-2 > noTeenSum----------------------------------------------------------------------------------

/*
Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- 
then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) 
{"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition").
*/

// noTeenSum(1, 2, 3) → 6
// noTeenSum(2, 13, 1) → 3
// noTeenSum(2, 1, 14) → 3
// noTeenSum(2, 1, 15) → 18

function noTeenSum(a, b, c) {
  if (a >= 13 && a <= 19) {
    if (a != 15 && a != 16) {
      a = 0;
    }
  }
  if (b >= 13 && b <= 19) {
    if (b != 15 && b != 16) {
      b = 0;
    }
  }
  if (c >= 13 && c <= 19) {
    if (c != 15 && c != 16) {
      c = 0;
    }
  }
  return a + b + c;
}

console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 1, 14));
console.log(noTeenSum(2, 1, 15));

// 16. Logic-2 > roundSum----------------------------------------------------------------------------------

/*
For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if 
its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int 
round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().
*/

// roundSum(16, 17, 18) → 60
// roundSum(12, 13, 14) → 30
// roundSum(6, 4, 4) → 10
// roundSum(6, 4, 4) → 10
// roundSum(4, 6, 5) → 20

function roundSum(a, b, c) {
  a = Math.round(a / 10) * 10;
  b = Math.round(b / 10) * 10;
  c = Math.round(c / 10) * 10;
  return a + b + c;
}

console.log(roundSum(15, 17, 18));
console.log(roundSum(12, 13, 14));
console.log(roundSum(6, 4, 4));
console.log(roundSum(6, 4, 4));
console.log(roundSum(4, 6, 5));

// 17. String-1 > makeAbba---------------------------------------------------------------------------------

/*
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
*/

// helloName("Bob") → "Hello Bob!"
// helloName("Alice") → "Hello Alice!"
// helloName("X") → "Hello X!"

function helloName(name) {
  return `Hello ${name}!`;
}

console.log(helloName("Bob"));
console.log(helloName("Alice"));
console.log(helloName("X"));

// 18. String-1 > makeAbba---------------------------------------------------------------------------------

/*
Given two strings, a and b, return the result ofputting them together in the order abba, 
e.g. "Hi" and "Bye" returns "HiByeByeHi".*/

// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat"

function makeAbba(a, b) {
  return a + b + b + a;
}

console.log(makeAbba("Hi", "Bye"));
console.log(makeAbba("Yo", "Alice"));
console.log(makeAbba("What", "Up"));

// 19. String-1 > makeTags---------------------------------------------------------------------------------
/*
The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text.In this example, the "i" tag makes <i> and </i> which surround the word "Yay". 
Given tag and word strings, create the HTML string with tags around the word, e.g. <i>Yay</i>".
*/

// makeTags("i", "Yay") → "<i>Yay</i>"
// makeTags("i", "Hello") → "<i>Hello</i>"
// makeTags("cite", "Yay") → "<cite>Yay</cite>"

function makeTags(tag, word) {
  return `<${tag}>${word}</${tag}>`;
}

console.log(makeTags("i", "Yay"));
console.log(makeTags("i", "Hello"));
console.log(makeTags("cite", "Yay"));

// 20. String-1 > makeOutWord---------------------------------------------------------------------------------

/*
Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. 
"<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.
*/

// makeOutWord("<<>>", "Yay") → "<<Yay>>"
// makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
// makeOutWord("[[]]", "word") → "[[word]]"

function makeOutWord(out, word) {
  let newWord = out.split("");
  newWord.splice(2, 0, word);
  return newWord.join("");
}

console.log(makeOutWord("<<>>", "Yay"));
console.log(makeOutWord("<<>>", "WooHoo"));
console.log(makeOutWord("[[]]", "word"));

// 21. String-1 > extraEnd---------------------------------------------------------------------------------

/*
Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
*/

// extraEnd("Hello") → "lololo"
// extraEnd("ab") → "ababab"
// extraEnd("Hi") → "HiHiHi"

function extraEnd(str) {
  if (str.length < 2) {
    return "";
  }
  const newStr = str.substring(str.length - 2);
  return newStr + newStr + newStr;
}

console.log(extraEnd("Hello"));
console.log(extraEnd("ab"));
console.log(extraEnd("Hi"));

// 22. String-2 > doubleChar---------------------------------------------------------------------------------

/*
Given a string, return a string where for every char in the original, there are two chars.*/

// doubleChar("The") → "TThhee"
// doubleChar("AAbb") → "AAAAbbbb"
// doubleChar("Hi-There") → "HHii--TThheerree"

function doubleChar(str) {
  let newWord = [];
  for (let i = 0; i <= str.length - 1; i++) {
    newWord.push(str[i]);
    newWord.push(str[i]);
  }
  return newWord.join("");
}

console.log(doubleChar("The"));
console.log(doubleChar("AAbb"));
console.log(doubleChar("Hi-There"));

// 23. String-2 > countHi---------------------------------------------------------------------------------

/*
Return the number of times that the string "hi" appears anywhere in the given string.
*/

// countHi("abc hi ho") → 1
// countHi("ABChi hi") → 2
// countHi("hihi") → 2

function countHi(str) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == "h" && str[i + 1] == "i") {
      count++;
    }
  }
  return count;
}

console.log(countHi("abc hi ho"));
console.log(countHi("ABChi hi"));
console.log(countHi("hihi"));

// 24. String-2 > countCode---------------------------------------------------------------------------------

/*
Return the number of times that the string "code" appears anywhere in the given string, 
except we'll accept any letter for the 'd', so "cope" and "cooe" count.
*/

// countCode("aaacodebbb") → 1
// countCode("codexxcode") → 2
// countCode("cozexxcope") → 2

function countCode(str) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == "c" && str[i + 1] == "o" && str[i + 3] == "e") {
      count++;
    }
  }
  return count;
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));

// 25. String-2 > endOther---------------------------------------------------------------------------------

/*
Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case 
differences (in other words, the computation should not be "case sensitive").
*/
// endOther("Hiabc", "abc") → true
// endOther("AbC", "HiaBc") → true
// endOther("abc", "abXabc") → true

function endOther(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a.endsWith(b) || b.endsWith(a);
}

console.log(endOther("Hiabc", "abc"));
console.log(endOther("AbC", "HiaBc"));
console.log(endOther("abc", "abXabc"));

// 26. String-2 > xyzThere---------------------------------------------------------------------------------

/*
Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.).
So "xxyz" counts but "x.xyz" does not.
*/
// xyzThere("abcxyz") → true
// xyzThere("abc.xyz") → false
// xyzThere("xyz.abc") → true

function xyzThere(str) {
  if (!str.includes(".")) {
    return str.includes("xyz");
  } else {
    return str.slice(0, str.indexOf(".")).includes("xyz");
  }
}

console.log(xyzThere("abcxyz"));
console.log(xyzThere("abc.xyz"));
console.log(xyzThere("xyz.abc"));

// 27. String-2 > mixString---------------------------------------------------------------------------------

/*
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, 
the second char of b, and so on. Any leftover chars go at the end of the result.
*/

// mixString("abc", "xyz") → "axbycz"
// mixString("Hi", "There") → "HTihere"
// mixString("xxxx", "There") → "xTxhxexre"

function mixString(a, b) {
  let newWord = [];
  for (let i = 0; i < a.length + 1; i++) {
    newWord.push(a[i]);
    newWord.push(b[i]);
  }
  return newWord.join("");
}

console.log(mixString("abc", "xyz"));
console.log(mixString("Hi", "There"));
console.log(mixString("xxxx", "There"));

// 28. Array-1 > firstLast6---------------------------------------------------------------------------------

/*
Given an array of ints, return true if 6 appears as either the first or last element 
in the array. The array will be length 1 or more.
*/

// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false

function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}

console.log(firstLast6([1, 2, 6]));
console.log(firstLast6([6, 1, 2, 3]));
console.log(firstLast6([13, 6, 1, 2, 3]));

// 29. Array-1 > commonEnd---------------------------------------------------------------------------------

/*

Given 2 arrays of ints, a and b, return true if they have the same first element or 
they have the same last element. Both arrays will be length 1 or more.
*/

// commonEnd([1, 2, 3], [7, 3]) → true
// commonEnd([1, 2, 3], [7, 3, 2]) → false
// commonEnd([1, 2, 3], [1, 3]) → true

function commonEnd(a, b) {
  if (a.length == 0 || b.length == 0) {
    return false;
  }
  return a[0] == b[0] || a[a.length - 1] == b[b.length - 1];
}

console.log(commonEnd([1, 2, 3], [7, 3]));
console.log(commonEnd([1, 2, 3], [7, 3, 2]));
console.log(commonEnd([1, 2, 3], [1, 3]));
console.log(commonEnd([3], [1, 3]));

// 30. Array-1 > rotateLeft3---------------------------------------------------------------------------------

/*
Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
*/

// rotateLeft3([1, 2, 3]) → [2, 3, 1]
// rotateLeft3([5, 11, 9]) → [11, 9, 5]
// rotateLeft3([7, 0, 0]) → [0, 0, 7]

function rotateLeft3(nums) {
  const newArr = [];
  for (let i = 0; i <= nums.length - 2; i++) {
    newArr.push(nums[i + 1]);
  }
  newArr.push(nums[0]);

  return newArr;
}

console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));

// 31. Array-2 > countEvens---------------------------------------------------------------------------------

/*
Return the number of even ints in the given array.
*/

// countEvens([2, 1, 2, 3, 4]) → 3
// countEvens([2, 2, 0]) → 3
// countEvens([1, 3, 5]) → 0

function countEvens(nums) {
  let count = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvens([2, 1, 2, 3, 4]));
console.log(countEvens([2, 2, 0]));
console.log(countEvens([1, 3, 5]));

// 32. Array-2 > sum13---------------------------------------------------------------------------------

/*
Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, 
so it does not count and numbers that come immediately after a 13 also do not count.
*/

// sum13([1, 2, 2, 1]) → 6
// sum13([1, 1]) → 2
// sum13([1, 2, 2, 1, 13]) → 6

function sum13(nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.indexOf(13) != -1) {
    nums.splice(nums.indexOf(13), 2);
  }
  let sum = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(sum13([1, 2, 2, 1]));
console.log(sum13([1, 1]));
console.log(sum13([1, 2, 2, 1, 13]));


// 33. Array-2 > sum67---------------------------------------------------------------------------------


/*
Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 
(every 6 will be followed by at least one 7). Return 0 for no numbers.
*/

// sum67([1, 2, 2]) → 5
// sum67([1, 2, 2, 6, 99, 99, 7]) → 5
// sum67([1, 1, 6, 7, 2]) → 4

function sum67(nums) {
  if (nums.length == 0) {
    return 0;
  }
  let find6Index = nums.indexOf(6);
  let find7Index = nums.indexOf(7);
  if (find6Index != -1) {
    if (find7Index != -1) {
      nums.splice(find6Index, find7Index - find6Index + 1);
      if (find7Index > find6Index) {
        let sum = 0;
        for (let i = 0; i <= nums.length - 1; i++) {
          console.log('this is the number: ', nums[i]);
          sum += nums[i];
        } 
        return sum;
      }
    }
  }
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum67([1, 2, 2]));
console.log(sum67([6, 3, 5, 7]));
console.log(sum67([1, 2, 2, 6, 99, 99, 7]));
console.log(sum67([1, 1, 6, 7, 2]));


// 34. Array-2 > has22---------------------------------------------------------------------------------

/*
Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.
*/

// has22([1, 2, 2]) → true
// has22([1, 2, 1, 2]) → false
// has22([2, 1, 2]) → false

function has22(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == 2 && nums[i + 1] == 2) {
      return true;
    }
  }
  return false;
}

console.log(has22([1, 2, 2]));
console.log(has22([1, 2, 1, 2]));
console.log(has22([2, 1, 2]));


// 35. Array-2 > countYZ---------------------------------------------------------------------------------

/*
Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)
*/

// countYZ("fez day") → 2
// countYZ("day fez") → 2
// countYZ("day fyyyz") → 2

function countYZ(str) {
  str = str.toLowerCase();
  let strArr = str.split(" ");
  let countNum = 0;
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    if (word.length > 0) {
      let lastChar = word.charAt(word.length - 1);
      if (lastChar === "y" || lastChar === "z") {
        countNum++;
      }
    }
  }
  return countNum;
}

console.log(countYZ("fez day"));
console.log(countYZ("day fez"));
console.log(countYZ("day fyyyz"));


// 36. String-2 > withoutString---------------------------------------------------------------------------------

/*
Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".
*/

// withoutString("Hello there", "llo") → "He there"
// withoutString("Hello there", "e") → "Hllo thr"
// withoutString("Hello there", "x") → "Hello there"

function withoutString(base, remove) {
  remove = remove.toLowerCase();
  if(remove.length>=3 && remove[0]===remove[1] && remove[1]===remove[2]){
    remove = remove[0]+remove[1];
    console.log(remove)
  }
  return base.replaceAll(remove, "");
}

console.log(withoutString("Hello therlloe", "llo"));
console.log(withoutString("Hello there", "e"));
console.log(withoutString("xHelxlo thexre", "x"));
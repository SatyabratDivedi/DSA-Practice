/** @format */

//1. isPalandrome  -------------------------------------------------------------------------

function isPalandrome(x) {
  return x < 0 ? false : x === Number(x.toString().split("").reverse().join(""))
}
// console.log(isPalandrome(121))


//2. Fibonacci Number  ---------------------------------------------------------------------

const fibArray = [0, 1];
const numLength = 5;
function FibonacciNumber(numLength) {
  for (let i = 2; i <= numLength -1; i++) {
    fibArray.push(fibArray[i-1] + fibArray[i-2]);  //first method 
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
    fibArray.push(fibArray[i-1] + fibArray[i-2]);
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

const nums = [5, 1, 3, 4, 2, 2, 5, 1]
let uniqArr = []
let repetNumber = []

const repetNum = () => {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] !== uniqArr.find((num) => num == nums[i])) {
      uniqArr.push(nums[i])
    } else {
      repetNumber.push(nums[i])
    }
  }
  // console.log("uniqArr: ", uniqArr)
  // console.log("repetNumber: ", repetNumber)
}
repetNum();


//5. isOppositeSame  -----------------------------------------------------------------------

const isOpposite = function (a, b){
 return Array(...a).reverse().join("") === b
}
const res = isOpposite("satya", "ayas")
// console.log(res)


//6. isAnagram

const isAnagtam = function (a, b){
  return (a.split('').sort().join('') === b.split('').sort().join(''))
}
// console.log(isAnagtam("satya", "ysata"))


//7. find the second largest number  -------------------------------------------------------

const arr = [19, 32,32, 23, 14, 33,33, 5]
const secondLargestNum = function (x) {

  //first method
  const data = x.sort((a, b) => a - b)
  const lastNum = data[data.length - 1]
  const secondLargestNumber = data.findLast((a) => a < lastNum)
  console.log("secondLargestNumber: ", secondLargestNumber);


  //second method
  const uniqArr = new Set(x) //remove duplicate
  const sortedArr =  Array.from(uniqArr).sort((a, b) => a - b)
  const secondLargestNum = sortedArr[sortedArr.length - 2]
  console.log('secondLargestNum: ', secondLargestNum, typeof secondLargestNum);
}
// secondLargestNum(arr)



//8. rotate array from last nth number  -----------------------------------------------------

let arr1 = ['1', '2', '3', '4', '5', '6', '7'];
const oppositeFrom = function (arr1, nth) {
  const lastNthNum = arr1.splice(arr1.length - nth);
  console.log('lastNthNum: ', lastNthNum);
  arr1.unshift(...lastNthNum);
  console.log(arr1);
};
// oppositeFrom(arr1, 2);


//9. objects in javascript practice --------------------------------------------------------

const students = [
  {name: 'neha', age: 44, gender: 'female'},
  {name: 'satya', age: 20, gender: 'male'},
  {name: 'shubham', age: 22, gender: 'male'},
  {name: 'shivam', age: 21, gender: 'male'},
  {name: 'priyanshi', age: 18, gender: 'female'},
  {name: 'raginee', age: 28, gender: 'female'},
  {name: 'saumya', age: 4, gender: 'female'},
  {name: 'lala', age: 36, gender: 'male'},
];

//all students whose age is greater than 20
const greater20Age = students.filter((stu) => stu.age > 20);
// console.log(greater20Age);


// age greater than 20 and accending order
const ageAccendingOrder = greater20Age.sort((a, b) => a.age > b.age);
// console.log(ageAccendingOrder)


// age greater then 20 and should be male
const maleStudents = students.filter((stu) => stu.age > 20 && stu.gender === 'male');
// console.log(maleStudents);


//max age student
const maxAgeStu = students.sort((a,b)=> a.age>b.age)[students.length-1]
// console.log(maxAgeStu)


//max age male student
const allMale = students.filter((stu)=> stu.gender === 'male') //all male student
const accendingAge = allMale.sort((a,b)=> a.age > b.age)  // accending age order of all male student
// console.log(accendingAge[allMale.length -1 ]);


//10. find the first max length of word on a sentence/---------------------------------------


const sentence = 'Lorem ipsum dolor sit amet consecteturg adipisicing elitaiauwe'

const maxLengthWord = sentence.split(' ').map((word)=> word).sort((a,b)=>a.length<b.length)[0]
// console.log(maxLengthWord, '-', maxLengthWord.length)



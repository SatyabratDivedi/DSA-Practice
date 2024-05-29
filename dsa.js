/** @format */

//1. isPalandrome

function isPalandrome(x) {
  return x < 0 ? false : x === Number(x.toString().split("").reverse().join(""))
}
// console.log(isPalandrome(121))


//2. Fibonacci Number

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


//3. nth Fibonacci number

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

//3. second method using recursion

const fib2 = function (n) {
  if (n == undefined) return 0;
  if (n <= 1) return n;
  return fib2(n - 1) + fib2(n - 2);
};
// console.log(fib(20));





//4. find uniq number and also repated number

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


//5. isOppositeSame

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

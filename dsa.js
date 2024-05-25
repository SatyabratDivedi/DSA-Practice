/** @format */

//1. isPalandrome
function isPalandrome(x) {
  return x < 0 ? false : x === Number(x.toString().split("").reverse().join(""))
}
console.log(isPalandrome(121))
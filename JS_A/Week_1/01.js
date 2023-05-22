// // var로 변수 선언
// var myVar = "Hello World";
// console.log(myVar); // "Hello World"

// // let으로 변수 선언
// let myLet = "Hello World";
// console.log(myLet); // "Hello World"

// // const로 상수 선언
// const myConst = "Hello World";
// console.log(myConst); // "Hello World"

// var로 변수 덮어쓰기
var myVar = "Hello";
var myVar = "World";
console.log(myVar); // "World"

// let으로 변수 덮어쓰기
let myLet = "Hello";
myLet = "World"; // 기존 값을 덮어쓰기
console.log(myLet); // "World"

// const로 상수 선언 후 값 변경하기
const myConst = "Hello";
myConst = "World"; // 오류 발생
console.log(myConst);
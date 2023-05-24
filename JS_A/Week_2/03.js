//단축 속성명: property shorthand

const name = "nbc";
const newAge = "30";

const obj = {
  name,
  age: newAge,
};

// const name = "nbc";
// const age = "30";

// const obj = {
//   name,
//   age,
// };

//전개구문 = spread operator
//destructuring과 함께 가장 많이 사용되는 es6문법 중 하나

// 배열
let arr = [1, 2, 3];

let newArr = [...arr, 4];
console.log(newArr); // [1,2,3,4]

// 객체
let user = { name: "nbc", age: 30 };
let user2 = { ...user };

user2.name = "nbc2";

console.log(user.name); // nbc
console.log(user2.name); // nbc2

//나머지 매개변수(rest parameter)
function func(a, b, ...args) {
  console.log(...args); //...을 안쓰면 [3, 4, 5, 6, 7]로 배열로 나옴
}

func(1, 2, 3); // 3
func(1, 2, 3, 4, 5, 6, 7); // 3 4 5 6 7

//템플릿 리터럴 (Template literals)
//멀티라인을 지원함
let text = "World"
console.log(`Hello My ${text}`);  //Hello My World


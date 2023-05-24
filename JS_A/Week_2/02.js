//구조분해할당: destructuring(de + structure + ing)
//de = not, structure = 구조
//배열이나 객체의 속성을 분해해서 값을 변수에 담음

// 배열의 경우
let [value1, value2] = [1, "new"];
console.log(value1); // 1
console.log(value2); // "new"

let arr = ["value1", "value2", "value3"];
let [a, b, c] = arr;
console.log(a, b, c); // value1 value2 value3

// let [a,b,c] = arr; 은 아래와 동일!
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// let [a, b, c, d] = arr;
// console.log(d); // undefined

// let [a, b, c, d = 4] = arr;
// console.log(d); // 4

// 객체의 경우
let user = { name: "nbc", age: 30 };
let { name, age } = user;

// let name = user.name;
// let age = user.age;

console.log(name, age); // nbc 30

// // 새로운 이름으로 할당
// let {name: newName, age: newAge} = user;
// console.log(name, age) // ReferenceError: name is not defined
// console.log(newName, newAge) //nbc 30

// let {name, age, birthDay} = user;
// console.log(birthDay) // undefined

// let {name, age, birthDay = "today"} = user;
// console.log(birthDay) // today

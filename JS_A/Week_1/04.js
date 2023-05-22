//불리언(Boolean)
//true(참), false(거짓)
let bool1 = true;
console.log(bool1); // true
console.log(typeof bool1); // "boolean"

let bool2 = false;
console.log(bool2); // false
console.log(typeof bool2); // "boolean"

//undefined
//un : not, define: 정의하다
let x;
console.log(x); // undefined

//null: 값이 존재하지 않음을 '명시적'으로 나타내는 방법
let y = null;

//object(객체): key-value pair
//key는 따음표x 문자형태로 들어가면 됨
//key와 value를 이어주는 콜론(:)이 있어야 함
let person = { name: "Alice", age: 20 };
person.name; // 'Alice'
person.age; // 20

//array(배열)
//여러개의 데이터를 순서대로 저장하는 데이터 타입
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
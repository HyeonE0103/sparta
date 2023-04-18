//[ 변수 선언(let과 const) ]
let name = "Sinok Kim"; // name 변수에 Sinrok Kim 값을 할당
console.log(name); // 변수 name이 가리키고 있는 값 Sinrok Kim을 출력

name = "William"; // 위에서 선언했던 name이라는 변수에 "William" 값을 재할당
console.log(name); // 변수 name이 가리키고 있는 값 "William"을 출력

const name2 = "Sinok Kim"; // name2 변수에 "Sinrok Kim" 값을 할당
console.log(name); // 변수 name이 가리키고 있는 값 "Sinrok Kim"을 출력

//name = "William"
// 위에서 선언했던 name2 변수에 "William"값을 다시 재할당. 에러 발생!

//[ 원시형(primitive) 타입 ]
//▶ 숫자
const myAge = 37;
const yourAge = 25;

console.log(myAge); // 37을 출력
console.log(yourAge); // 25를 출력

//▶ 문자열
const firstName = "Sinrok";
const lastName = "Kim";

console.log(firstName); // Sinrok을 출력
console.log(lastName); // Kim을 출력

//▶Boolean
const isMan = true;
const isWoman = false;

console.log(isMan);
console.log(isWoman);

//▶null, undefined
let name3 = null;
console.log(name3); // null을 출력

let name4;
console.log(name4); // undefined를 출력

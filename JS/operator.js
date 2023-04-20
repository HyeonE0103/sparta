//문자열 붙이기
console.log("My" + " car"); // My car
console.log("1" + 2); // 12

//템플릿 리터럴
const shoesPrice = 200000;
console.log(`이 신발의 가격은 ${shoesPrice}원입니다`);

//산술연산자
console.log(2 + 1); // 3
console.log(2 - 1); // 1
console.log(4 / 2); // 2
console.log(2 * 3); // 6
console.log(10 % 3); // 나머지(remainder) 연산자. 1
console.log(10 ** 2); // 10의 2승인 100

//증감연산자
let count = 1;
const preIncrement = ++count;
// count = count + 1
// const preIncrement = count
console.log(`count: ${count}, preIncrement: ${preIncrement}`); // count: 2, preIncrement: 2

count = 1;
const postIncrement = count++;
// const postIncrement = count
// count = count + 1
console.log(`count: ${count}, postIncrement: ${postIncrement}`); // count: 2, postIncrement: 1

//대입연산자
const shirtsPrice = 100000;
const pantsPrice = 80000;
let totalPrice = 0;

totalPrice += shirtsPrice; // totalPrice = totalPrice + shirtsPrice 와 동일
console.log(totalPrice);
totalPrice += pantsPrice; // totalPrice = totalPrice + pantsPrice 와 동일
console.log(totalPrice);
totalPrice -= shirtsPrice; // totalPrice = totalPrice - shirtsPrice 와 동일
console.log(totalPrice);

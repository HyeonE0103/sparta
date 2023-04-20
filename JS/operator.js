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

//비교연산자
console.log(1 < 2); // 1이 2보다 작은가? true
console.log(2 <= 2); // 2가 2보다 작거나 같은가? true
console.log(1 > 2); // 1이 2보다 큰가? false
console.log(1 >= 2); // 1이 2보다 크거나 같은가? false

//논리연산자
let isOnSale = true;
let isDiscountItem = true;

console.log(isOnSale && isDiscountItem); // true && true 이므로 true
console.log(isOnSale || isDiscountItem); // true || true 이므로 true

isOnSale = false;
console.log(isOnSale && isDiscountItem); // false && true 이므로 false
console.log(isOnSale || isDiscountItem); // false || true 이므로 true

isDiscountItem = false;
console.log(isOnSale && isDiscountItem); // false && false 이므로 false
console.log(isOnSale || isDiscountItem); // false || false 이므로 false

console.log(!isOnSale); // !false 이므로 true

//일치연산자
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log("Javascript" === "Javascript"); // true
console.log("Javascript" === "javascript"); // 대소문자나 띄워쓰기도 다 정확히 일치해야 해요. 따라서 false

//Q
let item = 5;
let item2 = 15;
let total = item + item2;
console.log(`총 ${total * 0.8}원에 물건을 구입합니다`);

// 데이터 타입
// runtime: run 하는 Time
// 코드가 작성할때가 아닌, 실제 코드가 실행될때 데이터 타입이 결정됨

//숫자
//정수
let num1 = 10;
console.log(num1); // 10
console.log(typeof num1); // "number"

//실수(float)
let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // "number"

//지수형(Exp)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3); // 250000
console.log(typeof num3); // "number"

//Nan: Not a Number, 숫자가 아닌 값을 변환하려고 할때 나타나는 현상
let num4 = "Hello" / 2;
console.log(num4); // NaN
console.log(typeof num4); // "number"

//Infinity(무한대)
let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // "number"

let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num6); // "number"
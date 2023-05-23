//조건부 실행
let x = 10;

// if (x > 0) {
//   console.log("x는 양수입니다");
// }

//and조건(&&)
x > 0 && console.log("x는 양수입니다.");

//or조건(||)
//삼항 연산자와 단축평가
let x2; //x2에는 undefined
let y = x2 || 10;

console.log(y); // 10

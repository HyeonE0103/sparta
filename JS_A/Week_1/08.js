//스코프(변수의 영향 범위), 전역변수, 지역변수, 화살표함수

// 전역스코프
let x = 10;
function printX() {
  console.log(x);
}
printX();   // 10
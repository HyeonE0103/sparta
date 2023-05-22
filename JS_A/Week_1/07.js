//함수 = function(함수)
//input, output

//함수 선언문
// function add(매개변수) {
//   함수 내부에서 실행할 로직
// }
function add(x, y) {
  return x + y;
}
console.log(add(2, 3)); // 5

//함수 표현식
let add2 = function (x, y) {
  return x + y;
};
console.log(add2(2, 3)); // 5

//함수를 호출(=함수를 사용)
//함수명() -> add(입력값)
console.log(add(2, 3)); // 5
let functionResult = add(3, 4);
console.log(functionResult);
let functionResult2 = add2(10, 20);
console.log(functionResult2);

//함수의 input: 함수의 input ->매개변수(매개체가 되는 변수)
//output: return문 뒤에 오는 값: 반환값
//화살표 함수
//ES6 신 문법
function add(x, y) {
  return x + y;
}

//기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
  return x + y;
};

//한줄로 된 화살표 함수
let arrowFunc02 = (x, y) => x + y;
console.log(arrowFunc02(2, 3)); // 5

//매개변수가 하나인 화살표 함수
let square = (x) => x * x;
console.log(square(3)); // 9
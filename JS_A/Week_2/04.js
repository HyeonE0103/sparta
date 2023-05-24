//일급 객체로서의 함수

//변수에 함수를 할당할 수 있음
//함수가 마치 값으로 취급됨
//함수가 나중에 사용될 수 있도록 조치되어 있음
let sayHello = function () {
  console.log("Hello!");
};
sayHello(); // "Hello!" 출력

//함수를 인자로 다른 함수에 전달할 수 있음
//콜백함수: 매개변수로써 쓰이는 함수
//고차함수: 함수로 인자로 받거나 return하는 함수
function callFunction(func) {
  //매개변수로 받는 변수가 함수임
  func();
}
sayHello = function () {
  console.log("Hello!");
};
callFunction(sayHello); // "Hello!" 출력

//함수를 반환할 수 있음
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}
const addFive = createAdder(5); //createAdder(5) = function(x){return x + 5;}
console.log(addFive(10)); // 15출력

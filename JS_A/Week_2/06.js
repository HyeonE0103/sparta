//배열의 요소로 함수를 할당
const myArray = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];

console.log(myArray[0](5, 10)); // 15 출력
console.log(myArray[1](10, 5)); // 5 출력

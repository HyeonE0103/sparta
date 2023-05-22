// 지역스코프
function printX() {
  let x = 10;
  console.log(x);
}

printX();

//블록스코프
// if (true) {
//   let x = 10;
//   console.log(x);
// }

// console.log(x);   // ReferenceError: x is not defined
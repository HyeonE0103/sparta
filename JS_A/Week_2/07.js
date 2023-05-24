function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

const multiplyByTwo = multiplyBy(2); // x * 2
const multiplyByThree = multiplyBy(3); //x * 3

const result = add(multiplyByTwo(5), multiplyByThree(10)); // 40 출력
//                      5 * 2             10 * 3

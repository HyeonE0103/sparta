const arr = new Array(1, 2, 3, 4, 5);
const arr2 = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr2);

const rainbowColors = ["red", "orange", "yellow"];

console.log(rainbowColors[0]); // o번 인덱스를 통해서 데이터에 접근. red
console.log(rainbowColors[1]); // 1번 인덱스를 통해서 데이터에 접근. orage
console.log(rainbowColors[2]); // 2번 인덱스를 통해서 데이터에 접근. yellow

rainbowColors.push("ultraviolet"); // 배열의 마지막에 ultarviolet 추가
console.log(rainbowColors); // ultraviolet이 추가된 rainbowColors 출력

rainbowColors.pop(); // 배열의 마지막 요소 ultraviolet을 제거
console.log(rainbowColors); // ultraviolet이 제거된 rainbowColors 출력

for (let i = 0; i < rainbowColors.length; i++) {
  console.log(rainbowColors[i]);
}

for (const color of rainbowColors) {
  console.log(color);
}

console.log(rainbowColors.length); // 3을 출력
console.log(rainbowColors[rainbowColors.length - 1]); // length 를 응용하여 배열의 마지막 요소도 쉽게 찾아서 출력 가능!

const items = [10, 20, 30, 40, 50];
let total = 0;
for (const item of items) {
  total += item;
}
let avg = total / items.length;
console.log(`합계: ${total}, 평균: ${avg}`);

//배열

//*생성
//기본 생성(0번째부터 시작)
let fruits = ["사과", "바나나", "오렌지"];

//크기 지정
let numbers = new Array(5);

//*배열 요소 접근
console.log(fruits[0]); // "사과"
console.log(fruits[1]); // "바나나"
console.log(fruits[2]); // "오렌지"

//*배열 메소드
//push() 메소드, 마지막 메소드 삽입
fruits = ["사과", "바나나"];
fruits.push("오렌지");
console.log(fruits); // ["사과", "바나나", "오렌지"]

//pop() 메소드, 마지막 메소드 삭제
fruits = ["사과", "바나나", "오렌지"];
fruits.pop();
console.log(fruits); // ["사과", "바나나"]

//shift() 메소드, 첫번째 요소 삭제
fruits = ["사과", "바나나", "오렌지"];
fruits.shift();
console.log(fruits); // ["바나나", "오렌지"]

//unshift() 메소드, 첫번째 메소드 삽입
fruits = ["바나나", "오렌지"];
fruits.unshift("사과");
console.log(fruits); // ["사과", "바나나", "오렌지"]

//splice() 메소드, 위치를 지정해서 삭제와 삽입
fruits = ["사과", "바나나", "오렌지"];
fruits.splice(1, 1, "포도");
//시작위치 1부터 한개의 요소를 삭제하고 그 자리에 포도 삽입
console.log(fruits); // ["사과", "포도", "오렌지"]

//slice() 메소드
fruits = ["사과", "바나나", "오렌지"];
let slicedFruits = fruits.slice(1, 2);
//인덱스 1부터 인덱스 2까지 새로운 배열을 만들어 반환
console.log(slicedFruits); // ["바나나"]



//매개 변수자리에 함수를 넣는 것: 콜백함수
numbers = [1, 2, 3, 4, 5];

//forEach
numbers.forEach(function (number) {
  console.log(number);
});

//map, 기존에 있던 배열을 가공해서 새로운 배열을 생산해내줌
//항상 원본 배열의 길이만큼 return 됨
let newNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(newNumbers); //[ 2, 4, 6, 8, 10 ]

//filter, 기존에 있던 배열에 조건에 맞는 새로운 배열을 생산해줌
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

//find, return문을 통해서 조건에 맞는 첫번째만 반환
let foundNumber = numbers.find(function (number) {
  return number > 3;
});
console.log(foundNumber); // 4

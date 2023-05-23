//for, while => ~동안: 반복문

// for(초기값; 조건식; 증감식){
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//배열과 for문은 짝꿍
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let i = 0; i < 11; i++) {
  if (i !== 0) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

//for ~ in문
//객체의 속성을 출력하는 문법
let person = { name: "John", age: 30, gender: "male" };

for (let key in person) {
  //key는 객체 안에 key를 말하기 때문에 key가 돌면서 name age gender를 가각 가리킴
  console.log(key + ": " + person[key]);
  //객체에 value에 접근하는 방법이 객체에 []을 열고 key를 입력하는 방법도 있음
}
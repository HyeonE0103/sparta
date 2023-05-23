//객체
//key - value pair
//하나의 변수에 여러개의 값을 넣을 수 있음

//*객체 생성 방법
//기본적인 객체 생성 방법
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

//생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 25, "여자");

//*접근하는 방법
console.log(person.name);
console.log(person.age);
console.log(person.gender);

//*객체 메소드(객체가 가진 여러가지 기능: Object.~~~)
//Object.key(): key를 가져오는 메소드
let keys = Object.keys(person);
console.log(keys); // ["name", "age", "gender"]

//Object.value(): value를 가져오는 메소드
let values = Object.values(person);
console.log(values); // ["홍길동", "30", "남자"]

//Object.entries()
//key와 value를 묶어서 배열로 만든 배열(2차열 배열)
let entries = Object.entries(person);
console.log(entries); //[ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

//Object.assign()
//객체 복사
let newPerson = Object.assign({}, person, { age: 35 });
console.log(newPerson); // { name: "홍길동", age: 35, gender: "남자" }

let newPerson2 = {};
Object.assign(newPerson2, person, { gender: "여자" });
console.log(newPerson2); // { name: '홍길동', age: 30, gender: '여자' }

//객체 비교
//크기가 상당히 큼 -> 메모리에 저장할 때 별도의 공간에 저장
//person1 별도 공간에 대한 주소
person1 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

//person2 별도 공간에 대한 주소
person2 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let str1 = "aaa";
let str2 = "aaa";

console.log(person1 === person2); // false
console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true
console.log(str1 === str2); // true

//객체 병합
person1 = {
  name: "홍길동",
  age: 30,
};

person2 = {
  gender: "남자",
};

//...: spread operate
let mergedPerson = { ...person1, ...person2 };

console.log(mergedPerson); // { name: "홍길동", age: 30, gender: "남자" }

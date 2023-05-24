//일급객체로써의 함수

//객체의 프로퍼티로 함수를 할당할 수 있음
//객체의 메소드로 함수를 호출할 수 있음
//{}(중괄호, 스코프)안에서의 this는 항상 자기 자신을 가리킴
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  sayHello2: () => console.log(`Hello, my name is ${this.name}`),
};

person.sayHello(); // "Hello, my name is John" 출력
person.sayHello2();// "Hello, my name is undefined" 출력
                   //기존함수를 화살표함수로 바꿨더니 John이 아닌 undefined가 뜸
                   //화살표함수는 this를 바인딩하지 않기 때문


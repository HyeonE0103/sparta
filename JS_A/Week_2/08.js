//Map, Set의 목적: 기본의 객체나 배열보다 데이터의 구성, 검색, 사용을 효율적으로 처리

//Map
//key / Value
//key의 어떤 데이터 타입(유형)도 다 들어갈 수 있음
//키가 정렬된 순서로 저장되기 때문
//기능: 검색, 삭제, 제거, 여부 확인

const myMap = new Map();
myMap.set("key", "value");
console.log(myMap.get("key")); // 'value' 출력

//반복!! => method: key, values, entries
const myMap2 = new Map();
myMap2.set("one", 1);
myMap2.set("two", 2);
myMap2.set("three", 3);

for (const key of myMap2.keys()) {
  console.log(key); //one two three
}

for (const value of myMap2.values()) {
  console.log(value); //1 2 3
}

for (const entry of myMap2.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`); //one:1 two:2 three:3
}

console.log(myMap2.size); // 3 출력

console.log(myMap2.has("two")); // true 출력

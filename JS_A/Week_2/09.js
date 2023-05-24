//Set
//고유한 값을 저장하는 자료구조
// 값만 저장, 키를 저장X
// 값이 중복되지 않는 유일한 요소로만 구성됨
//값 추가, 검색, 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value2");

console.log(mySet.size); // 2 출력
console.log(mySet.has("value2")); // true 출력

//Iterator, 반복
for (const value of mySet.values()) {
  console.log(value);
}

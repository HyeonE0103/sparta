var n = null;
console.log(typeof n); // object

//동등연산자(equality operator), 구분할 수 없음
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator), 확실히 구분할 수 있음
console.log(n === undefined); //false
console.log(n === null);  //true
//문자: String(문자열 = 문자의 나열)
//' ' = " "

let str = "Hello World!";
console.log(str);

//문자열 길이 확인(length)
console.log(str.length); // 13

//문자열 결합(concatenation)
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result); // "Hello, world!"

//문자열 자르기(substr, slice)
console.log(str.substr(6, 6)); // "World!"
console.log(str.slice(6, 12)); // "World!"

//문자열 검색(search)
console.log(str.search("World!")); // 6

// 문자열 대체(replace)
str = "Hello, world!";
result = str.replace("world", "JavaScript");
console.log(result); // "Hello, JavaScript!"

//문자열 분할(split)
str = "apple, banana, kiwi";
result = str.split(",");
console.log(result); // ["apple", " banana", " kiwi"]


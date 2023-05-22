//형 변환
//형태 -> 바꿈
//명시적 형 변환, 암시적 형 변환

//암시적 형 변환
//문자열 변환
console.log(1 + "2");   // "12"
console.log("1" + true);   // "1true"
console.log("1" + {});   // "1[object Object]"
console.log("1" + null);   // "1null"
console.log("1" + undefined);   // "1undefined"
//{}, null, undefined + "1" => 문자열

//숫자 변환
console.log(1 - "2");   // -1
console.log("2" * "3");   // 6
console.log(4 + +"5");   // 9
//+가 아닌 -,*, /인 경우 숫자가 우선시됨

//명시적 형 변환
//불리언 변환
console.log(Boolean(0));   // false
console.log(Boolean(""));   // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));   // false
console.log(Boolean("false"));   // true
console.log(Boolean({}));   // true

//문자열 변환
console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String({}));        // "[object Object]"

//숫자 변환
console.log(Number("123"));   // 123
console.log(Number(""));      // 0
console.log(Number("  "));    // 0
console.log(Number(true));    // 1
console.log(Number(false));   // 0
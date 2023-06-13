//명시적 this binding
// call, apply, bind
// call
var func = function (a, b, c) {
	console.log(this, a, b, c);
};

// no binding
func(1, 2, 3); // global을 바라봄

// 명시적 binding
// call을 할때 this로 바인딩해주고 싶은 객체로 앞에다가 써주면 됨
// func 안에 this에는 {x: 1}이 binding 됨
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6
//문(if, else if, switch ~~)

//1. if문
let x = 10;
if (x > 0) {
  console.log("x는 양수입니다.");
}

//2.if-else if -else문
x = 0;
if (x > 0) {
  console.log("x는 양수입니다.");
} else if (x < 0) {
  console.log("x는 음수입니다.");
} else {
  console.log("x는 0입니다.");
}

//switch
//변수에 값에 따라, 여러개의 경우(case) 중 하나를 선택
let fruit = "사과";
switch (fruit) {
  case "사과":
    console.log("사과는 빨간색입니다.");
    break;
  case "바나나":
    console.log("바나나는 노란색입니다.");
    break;
  case "오렌지":
    console.log("오렌지는 주황색입니다.");
    break;
  default:
    console.log("해당하는 과일이 없습니다.");
    break;
}


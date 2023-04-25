// 함수의 선언
function calculateAvg(price1, price2) {
  const sum = price1 + price2;
  console.log(`두 상품의 합계는 ${sum}입니다.`);
  const avg = sum / 2;
  return avg;
}

const priceA = 1000;
const priceB = 2000;
const avg1 = calculateAvg(priceA, priceB);
console.log(`두 상품의 평균은 ${avg1}입니다.`);

const priceC = 3000;
const priceD = 4000;
const avg2 = calculateAvg(priceC, priceD);
console.log(`두 상품의 평균은 ${avg2}입니다.`);

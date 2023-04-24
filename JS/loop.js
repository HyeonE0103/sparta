let temperature = 20;
while (temperature < 25) {
  console.log(`while: ${temperature}도 정도면 적당한 온도입니다.`);
  temperature++;
}

for (let temperature = 20; temperature < 25; temperature++) {
  console.log(`for: ${temperature}도 정도면 적당한 온도입니다.`);
}

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(`${i}은(는) 짝수입니다`);
  } else {
    console.log(`${i}은(는) 홀수입니다`);
  }
}

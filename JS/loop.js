let temperature = 20;
while (temperature < 25) {
  console.log(`while: ${temperature}도 정도면 적당한 온도입니다.`);
  temperature++;
}

for (let temperature = 20; temperature < 25; temperature++) {
  console.log(`for: ${temperature}도 정도면 적당한 온도입니다.`);
}

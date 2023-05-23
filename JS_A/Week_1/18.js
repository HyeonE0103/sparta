//while
// while (조건) {
//   메인로직;
//   증감
// }

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//do ~ while
// do{
//   메인로직
//   증감
// }while(조건)
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

//break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); //0 1 2 3 4
}

//continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); //0 1 2 3 4 6 7 8 9
}
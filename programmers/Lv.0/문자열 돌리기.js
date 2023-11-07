/*
https://school.programmers.co.kr/learn/courses/30/lessons/181945

[문제설명]

문자열 str이 주어집니다.
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

[입력 예]
abcde

*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  str.split('').map(i => {
    console.log(i)
  })
});


//다른답
rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  [...str].forEach(c => console.log(c))
});

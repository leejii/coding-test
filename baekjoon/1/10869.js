//https://www.acmicpc.net/problem/10869
//사칙연산
//두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "./10869.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.trunc(a/b));
console.log(a%b);

/**
 [TIP]
 Number.toFixed()은 string 반환이라 타입 오류
 */
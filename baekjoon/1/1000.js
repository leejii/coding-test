//https://www.acmicpc.net/problem/1000
//A+B

const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "./10430.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(Number(input[0])+Number(input[1]));
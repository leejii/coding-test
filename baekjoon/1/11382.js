//https://www.acmicpc.net/problem/11382
//꼬마 정민

const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "./11382.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(Number(input[0])+Number(input[1])+Number(input[2]));
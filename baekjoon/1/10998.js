//https://www.acmicpc.net/problem/10998
//A×B

const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "./10998.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(Number(input[0])*Number(input[1]));
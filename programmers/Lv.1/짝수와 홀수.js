/*
https://school.programmers.co.kr/learn/courses/30/lessons/12937

[문제설명]

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

#짝수홀수

*/


function solution(num) {
  var answer = num % 2 == 0 ? 'Even' : 'Odd';
  return answer;
}


//다른답
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even"
}
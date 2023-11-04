/*
https://school.programmers.co.kr/learn/courses/30/lessons/12917

[문제설명]

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

#정렬

*/

function solution(s) {
  var answer = s.split('').sort().reverse().join('');
  return answer;
}


//다른답

function solution(s) {
  return s.split("").sort((a, b) => a < b ? 1 : -1).join("")
}

function solution(s) {
  return s.split('').sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
  }).join('');
}


/*
https://school.programmers.co.kr/learn/courses/30/lessons/12925

[문제설명]

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

#숫자변환

*/


function solution(s) {
  var answer = Number(s);
  return answer;
}


//다른답
function strToInt(str) {
  return str / 1
}

function strToInt(str){
  return +str;
}

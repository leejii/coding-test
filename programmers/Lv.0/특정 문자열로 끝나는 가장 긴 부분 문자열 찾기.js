/*
https://school.programmers.co.kr/learn/courses/30/lessons/181872

[문제설명]

문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

#문자열나누기 #문자열찾기

*/


function solution(myString, pat) {
  var answer = myString.slice(0, myString.lastIndexOf(pat) + pat.length);
  return answer;
}

//다른 예
function solution(myString, pat) {
  return myString.substring(0, myString.lastIndexOf(pat) + pat.length);
}

/*
https://school.programmers.co.kr/learn/courses/30/lessons/181875

[문제설명]

문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

#대소문자

*/

//1
function solution(strArr) {
  var answer = [];

  for (var i = 0; i < strArr.length; i++) {
    i % 2 == 0 ? answer.push(strArr[i].toLowerCase()) : answer.push(strArr[i].toUpperCase())
  }
  return answer;
}

//2
function solution(strArr) {
  var answer = [];
  strArr.map((el, i) => {
    i % 2 == 0 ? answer.push(el.toLowerCase()) : answer.push(el.toUpperCase())
  })
  return answer;
}

//다른답

function solution(strArr) {
  return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
}


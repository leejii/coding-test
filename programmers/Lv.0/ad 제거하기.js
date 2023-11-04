/*
https://school.programmers.co.kr/learn/courses/30/lessons/181870

[문제설명]

문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

#문자열비교 #배열제거

*/

//1
function solution(strArr) {
  var answer = [];

  strArr.map(i => {
    return i.indexOf('ad') == -1 ? answer.push(i) : ''
  })

  return answer;
}

//2
function solution(strArr) {
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].indexOf('ad') !== -1) {
      strArr.splice(i, 1);
    }
  }
  return strArr;
}

//다른답

function solution(strArr) {
  return strArr.filter((str) => !str.includes('ad'));
}


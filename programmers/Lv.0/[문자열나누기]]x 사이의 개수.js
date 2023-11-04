/*
https://school.programmers.co.kr/learn/courses/30/lessons/181867

[문제설명]

문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

*/

//1
function solution(myString) {
  var answer = [];
  var arr = myString.split('x');
  for (i of arr) {
    answer.push(i.length)
  }
  return answer;
}


//2
function solution(myString) {
  var answer = [];
  var newArr = myString.split('x')
  var i = 0;

  while (i < newArr.length) {
    answer.push(newArr[i].length)
    i++
  }

  return answer;
}

//다른 예

function solution(myString) {
  return myString.split('x').map(v => v.length);
}



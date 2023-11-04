/*
https://school.programmers.co.kr/learn/courses/30/lessons/12944

[문제설명]

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

*/

function solution(arr) {
  const result = arr.reduce(function add(sum, i) {
    return sum + i;
  }, 0);

  const answer = result / arr.length;

  return answer;
}

function solution(arr) {
  var answer = 0;

  for (i of arr) {
    answer += i
  }
  return answer / arr.length;
}


//다른답
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}


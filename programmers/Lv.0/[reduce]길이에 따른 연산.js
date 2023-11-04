/*
https://school.programmers.co.kr/learn/courses/30/lessons/181879

[문제설명]

정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

#reduce

*/

//1
function solution(num_list) {
  var answer = num_list.length > 10 ? num_list.reduce((a, b) => a + b) : num_list.reduce((a, b) => a * b);
  return answer
}

//2
function solution(num_list) {
  var answer = 1;

  if (num_list.length > 11) {
    for (var i of num_list) {
      answer += i
    }
    answer = answer - 1
  } else {
    for (var j of num_list) {
      answer *= j
    }
  }
  return answer;
}


//다른답

const solution = n => n.reduce((a, v) => n.length > 10 ? a + v : a * v)




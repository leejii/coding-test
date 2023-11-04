/*
https://school.programmers.co.kr/learn/courses/30/lessons/181888

[문제설명]

정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

*/

function solution(num_list, n) {
  var answer = [];

  answer = num_list.map((a, b) => {
    if (b % n == 0) {
      return a
    }
  }).filter(i => i)

  return answer;
}

function solution(num_list, n) {
  var answer = [];

  for (var i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i])
  }
  return answer;
}


//다른답

const solution = (num_list, n) => num_list.filter((_, i) => !(i % n))


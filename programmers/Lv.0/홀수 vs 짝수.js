/*
https://school.programmers.co.kr/learn/courses/30/lessons/181887

[문제설명]

정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

*/

function solution(num_list) {
  var answer = 0;
  var n1 = 0;
  var n2 = 0;

  for (var i = 0; i < num_list.length; i++) {
    if ((i + 1) % 2 == 0) {
      n1 += num_list[i]
    } else {
      n2 += num_list[i]
    }
  }

  answer = n1 > n2 ? n1 : n2
  return answer;
}


function solution(num_list) {
  var even = 0;
  var odd = 0;

  for (var i = 0; i < num_list.length; i++) {
    if ((i + 1) % 2 == 0) {
      even += num_list[i]
    } else {
      odd += num_list[i]
    }
  }
  return even > odd ? even : odd;
}


//다른답
function solution(num_list) {
  let even = 0;
  let odd = 0

  num_list.map((v, idx) => {
    !(idx % 2) ? even += v : odd += v;
  })

  return odd > even ? odd : even;
}



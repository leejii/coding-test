/*

[문제설명]

정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

#정렬 #문자열나누기

*/

function solution(num_list) {
  num_list.sort(function (a, b) {
    return a - b
  })
  return num_list.slice(0, 5);
}


//다른 예
function ex1(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}


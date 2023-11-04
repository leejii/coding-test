/*
https://school.programmers.co.kr/learn/courses/30/lessons/12939

[문제설명]

문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

#최대최소

*/

function solution(s) {
  const arr = s.split(' ').map(Number);
  return Math.min(...arr).toString().concat(' ', Math.max(...arr));
}


function solution(s) {
  var max = s.split(' ').reduce((a, b) => {
    return Math.max(a, b)
  })
  var min = s.split(' ').reduce((a, b) => {
    return Math.min(a, b)
  })

  return min + " " + max
}


//다른답

function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr) + ' ' + Math.max(...arr);
}

function solution(s) {
  var arr = s.split(' ');
  arr.sort((a, b) => a - b);

  var answer = arr[0] + " " + arr[arr.length - 1];

  return answer;
}

function solution(s) {
  return Math.min(...s.split(' ')) + ' ' + Math.max(...s.split(' '));
}

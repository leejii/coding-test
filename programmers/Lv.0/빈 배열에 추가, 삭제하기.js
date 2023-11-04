/*
https://school.programmers.co.kr/learn/courses/30/lessons/181860

[문제설명]

아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

#배열 #while #push #pop

*/

function solution(arr, flag) {
  var answer = [];

  for (var i = 0; i < flag.length; i++) {
    if (flag[i] == true) {
      var j = 0;
      while (j < arr[i] * 2) {
        answer.push(arr[i])
        j++
      }
    } else {
      var j = 0;
      while (j < arr[i]) {
        answer.pop(arr[i])
        j++
      }
    }
  }
  return answer;
}

//다른 예

//1
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
    [],
  );
}


//2
function solution(arr, flag) {
  var answer = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    }
    else {
      for (let k = 0; k < arr[i]; k++) {
        answer.pop();
      }
    }
  }
  return answer;
}



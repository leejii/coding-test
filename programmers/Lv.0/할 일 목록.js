/*
https://school.programmers.co.kr/learn/courses/30/lessons/181885

[문제설명]

오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

#반복문

*/

function solution(todo_list, finished) {
  var answer = [];
  answer = todo_list.map((a, b) => {
    if (finished[b] == false) {
      return a
    }
  }).filter(i => i)
  return answer;
}

function solution(todo_list, finished) {
  var answer = [];

  finished.map((el, i) => {
    el == false ? answer.push(todo_list[i]) : ''
  })

  return answer;
}



//다른답
function solution(todo_list, finished) {
  var answer = [];
  return todo_list.filter((e, i) => !finished[i]);
}

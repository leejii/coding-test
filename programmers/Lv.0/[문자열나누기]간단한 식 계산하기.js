/*
https://school.programmers.co.kr/learn/courses/30/lessons/181865

[문제설명]

문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

#문자열나누기

*/

//1
function solution(binomial) {
  var answer = 0;
  var newArr = binomial.split(' ');

  answer = newArr[1] == "+" ? Number(newArr[0]) + Number(newArr[2])
    : newArr[1] == "-" ? Number(newArr[0]) - Number(newArr[2])
      : Number(newArr[0]) * Number(newArr[2])

  return answer;
}


//2
function solution(binomial) {
  var answer = 0;
  var arr = binomial.split(' ');

  if (arr[1] == '+') {
    answer = Number(arr[0]) + Number(arr[2])
  } else if (arr[1] === '-') {
    answer = Number(arr[0]) - Number(arr[2])
  } else {
    answer = Number(arr[0]) * Number(arr[2])
  }
  return answer
}



//다른 예

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}
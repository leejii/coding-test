
/*
https://school.programmers.co.kr/learn/courses/30/lessons/181854

[문제설명]

정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

#map #짝수홀수

*/

//1. map 사용
function solution(arr, n) {
  var answer = [];
  if (arr.length % 2 == 0) {
    answer = arr.map((a, b) => {
      if (b % 2 !== 0) {
        return a + n
      } else {
        return a
      }
    })
  } else {
    answer = arr.map((a, b) => {
      if (b % 2 == 0) {
        return a + n
      } else {
        return a
      }
    })
  }
  return answer;
}

//2. for문 사용
function solution(arr, n) {
  var answer = [];

  if (arr.length % 2 == 0) {
    for (var i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        answer.push(arr[i] + n)
      } else {
        answer.push(arr[i])
      }
    }
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        answer.push(arr[i] + n)
      } else {
        answer.push(arr[i])
      }
    }
  }
  return answer;
}
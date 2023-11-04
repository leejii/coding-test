/*
https://school.programmers.co.kr/learn/courses/30/lessons/181856

[문제설명]

두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

#반복문 #for문

*/

//1
function solution(arr1, arr2) {
  var sum1 = 0;
  var sum2 = 0;

  arr1.forEach(function (item) {
    sum1 += item;
  });

  arr2.forEach(function (item) {
    sum2 += item;
  });

  if (arr1.length == arr2.length) {
    return sum1 == sum2 ? 0 : sum1 > sum2 ? 1 : -1
  } else {
    return arr1.length > arr2.length ? 1 : -1
  }
}


//2
function solution(arr1, arr2) {
  let answer1 = 0;
  let answer2 = 0;

  if (arr1.length < arr2.length) {
    return -1
  } else if (arr1.length > arr2.length) {
    return 1
  } else {
    for (i in arr1) {
      answer1 += arr1[i]
    }
    for (j in arr2) {
      answer2 += arr2[j]
    }
    return answer1 > answer2 ? 1 : answer1 < answer2 ? -1 : 0
  }
}

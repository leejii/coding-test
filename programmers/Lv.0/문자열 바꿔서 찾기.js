/*
https://school.programmers.co.kr/learn/courses/30/lessons/181864

[문제설명]
문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

#문자열치환 #치환 #중복 #중복문자찾기

*/

//1
function solution(myString, pat) {
  var answer = 0;
  var newArr = []
  myString.split('').map(i => {
    i == 'A' ? newArr.push('B') : newArr.push('A');
  })
  answer = newArr.join('').indexOf(pat) !== -1 ? 1 : 0;
  return answer
}

//2
function solution(myString, pat) {
  var answer = 0;
  myString = myString.replaceAll(/[AB]/g, function (i) {
    return i === 'A' ? 'B' : 'A';
  })
  return myString.indexOf(pat) !== -1 ? 1 : 0
}

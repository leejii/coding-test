/*
https://school.programmers.co.kr/learn/courses/30/lessons/181874#

[문제설명]

문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

#대소문자 #문자배열

*/


//1
function solution(myString) {
  var answer = '';

  answer = myString.split('').map(i => {
    if (i == "a") {
      return 'A'
    } else if (i.toUpperCase() && i !== 'A') {
      return i.toLowerCase()
    } else {
      return i
    }
  }).join('')

  return answer;
}

//2
function solution(myString) {
  var arr = [];
  myString.split('').map(i => {
    if (i == 'a') {
      arr.push('A')
    } else {
      i === i.toUpperCase() ? arr.push(i.toLowerCase()) : arr.push(i)
    }
  })
  return arr.join('')
}


//다른답
//1
const solution = s => s.toLowerCase().replaceAll('a', 'A');

//2
function solution(myString) {
  return [...myString].map(str => ['a', 'A'].includes(str) ? 'A' : str.toLowerCase()).join('');
}



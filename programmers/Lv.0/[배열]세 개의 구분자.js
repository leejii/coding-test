/*
https://school.programmers.co.kr/learn/courses/30/lessons/181862

[문제설명]

임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.

예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.

문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.

#배열 #filter #문자열나누기

*/

//1
function solution(myStr) {
  var answer = [];

  myStr = myStr.split(/a|b|c/g).filter(function (item) {
    return item !== null && item !== undefined && item !== '';
  });

  myStr.length === 0 ? myStr.push("EMPTY") : myStr
  return myStr;
}

//2
function solution(myStr) {
  var text = myStr.replaceAll('a', ' ').replaceAll('b', ' ').replaceAll('c', ' ').split(' ');
  text = text.filter((el, i) => el)
  text.length === 0 ? text.push("EMPTY") : text

  return text;
}


//다른 예
//1
const solution = s => s.match(/[^a-c]+/g) || ['EMPTY']

//2
function solution(myStr) {
  const list = myStr.split(/[a|b|c]/).filter(e => e);
  return list.length ? list : ["EMPTY"];
}

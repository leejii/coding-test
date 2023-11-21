/*
https://school.programmers.co.kr/learn/courses/30/lessons/12948

[문제설명]
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

[입출력]
phone_number	return
"01033334444"	"*******4444"
"027778888"	  "*****8888" 

*/

function solution(phone_number) {
  var star = '*';
  return star.repeat(phone_number.slice(0, -4).length) + phone_number.slice(-4);
}

//다른답

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}

const solution = n => [...n].fill("*", 0, n.length - 4).join("")


function hide_numbers(s) {
  var result = "";
  //함수를 완성해주세요

  for (var i = 0; i < s.length; i++) {
    result += i < s.length - 4 ? "*" : s.charAt(i);
  }

  return result;
}

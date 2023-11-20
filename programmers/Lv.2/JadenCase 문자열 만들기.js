/*
https://school.programmers.co.kr/learn/courses/30/lessons/12951
[문제설명]
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

[입출력 예]
s	                    return
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	    "For The Last Week"

*/

function solution(s) {
    var answer = '';
    s.toLowerCase().split(' ').map(i => {
        answer += i.slice(0, 1).toUpperCase() + i.slice(1, i.length) + " ";  
    })
    return answer.slice(0, -1);
}

//다른답
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

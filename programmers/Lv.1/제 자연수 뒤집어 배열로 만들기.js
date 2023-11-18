/*
https://school.programmers.co.kr/learn/courses/30/lessons/12932
[문제설명]

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

[입출력]
n	return
12345	[5,4,3,2,1]

*/

function solution(n) {
    return n.toString().split('').map(i => Number(i)).reverse();
}

//다른답

function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}

function solution(n) {
    return n.toString().split('').reverse().map(o => o = parseInt(o));
}


function solution(n) {
    return (n + '').split('').reverse().map(n => parseInt(n));
}

function solution(n) {
    var answer = [];
    n = n + "";
    for (var i = n.length - 1; i >= 0; i--) {
        answer.push(Number(n[i]));
    }
    return answer;
}
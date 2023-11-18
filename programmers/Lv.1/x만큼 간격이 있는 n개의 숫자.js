/*
https://school.programmers.co.kr/learn/courses/30/lessons/12954
[문제설명]

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

[입출력 예]
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]

*/

function solution(x, n) {
    var answer = [];
    
    for(var i=1; i<=n; i++){
        answer.push((i*x))
    }
    return answer;
}


//다른답
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}
/*
https://school.programmers.co.kr/learn/courses/30/lessons/12912

[문제설명]

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

*/

function solution(a, b) {
	var arr = [];
	if (a < b) {
		for (var i = a; i <= b; i++) {
			arr.push(i)
		}
	} else {
		for (var i = b; i <= a; i++) {
			arr.push(i)
		}
	}
	return arr.reduce((a, b) => a + b);
}

function solution(a, b) {
	var answer = 0;

	if (a < b) {
		for (var i = a; i <= b; i++) {
			answer += i
		}
	} else {
		for (var i = b; i <= a; i++) {
			answer += i
		}
	}
	return answer;
}


//다른답

//양 끝의 합 * 양 끝의 합의 개수
function adder(a, b) {
	var result = 0
	//함수를 완성하세요
	return (a + b) * (Math.abs(a - b) + 1) / 2;
}

function adder(a, b, s = 0) {
	for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
	return s;
}


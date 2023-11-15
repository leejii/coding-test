/*
https://school.programmers.co.kr/learn/courses/30/lessons/181886

[문제설명]

최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

#배열 #빈배열제거
*/

function solution(names) {
    var answer = [];
    
    for(var i=0; i <= names.length+5; i+=5){
        answer.push(names[i])
    }
    return answer.filter(i => i)
}


//다른답
const solution = names => names.filter((_, i) => !(i % 5))

function solution(names) {
	let result = [];

	for(let i = 0; i < names.length; i++) {
			if(i%5 == 0) {
					result.push(names[i]);
			}
	}

	return result;
}

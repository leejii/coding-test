/*
https://school.programmers.co.kr/learn/courses/30/lessons/12935
[문제설명]

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

[제한 조건]
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

[입출력 예]
arr	        return
[4,3,2,1]	[4,3,2]
[10]	    [-1]

*/

function solution(arr) {
    var answer = [-1];    
    var num = [...arr].sort((a,b) => a-b)[0];
    var newArr = arr.filter(i => i !== num)

    answer = newArr.length == 0 ? answer : newArr

    return answer;
}

//다른답
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

function solution(arr) {
    const min = Math.min(...arr);
    return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
}

function solution(arr) {
    if (arr.length === 1 ) {
        return [-1]
    }
    const minValue = Math.min.apply(null, arr)
    const index = arr.findIndex(value => value === minValue)
    arr.splice(index, 1)
    return arr
}

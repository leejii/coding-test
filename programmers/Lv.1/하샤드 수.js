/*
https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
[문제설명]
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

[제한 조건]
x는 1 이상, 10000 이하인 정수입니다.

[입출력 예]
x	return
10	true
12	true
11	false
13	false

*/

function solution(x) {
    var answer = true;
    var num = 0;
    [...x.toString()].map(i => {
        num += Number(i)
    })
    
    answer = x % num == 0 ? true : false;

    return answer;
}

//다른답
//1
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}

//2
function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

//3
function solution(x) {
    return x%eval([...x.toString()].join("+")) ? false : true;
}

//4
function Harshad(n){
    return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
}


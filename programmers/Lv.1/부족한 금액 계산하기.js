/*
https://school.programmers.co.kr/learn/courses/30/lessons/82612
[문제설명]

새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

[입출력 예]
price	money	count	result
3	    20	    4	    10

#금액이 부족하지 않을 때 주의!
#Math.sign()는 양수 1, 음수 -1, 0은 0

*/

function solution(price, money, count) {
    var answer = 0;
    var num = 0;
    var i =1;
    
    while(i <= count){
        num += (price * i);
        i++
    }
    
    answer = money - num;

    return Math.sign(answer) == -1 ? Math.abs(answer) : 0;;
}

//다른답
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

let solution = (p, m, c) => Math.max(p * c * ++c / 2 - m, 0)


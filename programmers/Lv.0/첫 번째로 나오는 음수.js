/*
https://school.programmers.co.kr/learn/courses/30/lessons/181896

[문제설명]

정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

#음수양수 
*/


function solution(num_list) {
    var answer = -1;
    
    for(var i=0; i<num_list.length; i++){
        if(Math.sign(num_list[i]) == -1){
            answer = i
            break;
        }
    }
    return answer;
}


//다른답
const solution = num_list => num_list.findIndex(v => v < 0)




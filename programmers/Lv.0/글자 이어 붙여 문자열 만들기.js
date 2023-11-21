/*
https://school.programmers.co.kr/learn/courses/30/lessons/181915
[문제설명]

문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

[입출력 예]
my_string	            index_list	                                result
"cvsgiorszzzmrpaqpe"	[16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]	"programmers"
"zpiaz"	                [1, 2, 0, 0, 3]	                            "pizza"

*/

function solution(my_string, index_list) {
    var answer = '';
    
    index_list.map(i => {
        answer += my_string.charAt(i)
    })
    
    return answer;
}


//다른답
function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('')
}

const solution=(s,i)=>i.map(v=>s[v]).join('')


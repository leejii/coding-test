/*
https://school.programmers.co.kr/learn/courses/30/lessons/181930

[문제설명]

1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

 - 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
 - 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
 - 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.

세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

[입력 예]
 a b c result
 2 6 1 9
 5 3 3 473
 4 4 4 110592

*/

//처음에 먼저 이렇게 접근함
/*
if(arr.length - set.size == 0){
    answer = a+b+c
}else if(arr.length - set.size == 1){
    answer = (a+b+c) * ((Math.pow(a, 2)) + Math.pow(b, 2) + Math.pow(c, 2))
}else {
    for(var i=1; i<=arr.length; i++){
        answer *= ((Math.pow(a, i)) + Math.pow(b, i) + Math.pow(c, i))
    }
}
*/

function solution(a, b, c) {
  var answer = 1;
  let arr = [a, b, c];
  let size = arr.length - new Set(arr).size;

  for (var i = 1; i <= (size + 1); i++) {
    answer *= ((Math.pow(a, i)) + Math.pow(b, i) + Math.pow(c, i))
  }

  return answer;
}


//다른답
function solution(a, b, c) {
  let result = a + b + c
  if (a === b || a === c || b === c) {
    result *= a ** 2 + b ** 2 + c ** 2
  }
  if (a === b && a === c) {
    result *= a ** 3 + b ** 3 + c ** 3
  }
  return result
}

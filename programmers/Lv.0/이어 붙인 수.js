/*
https://school.programmers.co.kr/learn/courses/30/lessons/181928

[문제설명]

정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

[입력 예]
num_list	      result
[3, 4, 5, 2, 1]	393
[5, 7, 8, 3]	  581

*/

function solution(num_list) {
  let even = '';
  let odd = '';

  num_list.map(el => {
    if (el % 2 == 0) even += el
    else odd += el
  })

  return Number(even) + Number(odd);
}

//다른답
function solution(num_list) {
  const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
    if (num % 2 === 0) {
      evens.push(num)
    } else {
      odds.push(num)
    }
    return { odds, evens }
  }, { odds: [], evens: [] })
  return Number(odds.join('')) + Number(evens.join(''))
}

function solution(num_list) {
  const concat = (a, b) => parseInt(`${a}${b}`, 10);
  const [odd, even] = num_list.reduce(
    ([odd, even], num) => (num % 2 ? [concat(odd, num), even] : [odd, concat(even, num)]),
    [0, 0],
  );
  return odd + even;
}

function solution(num_list) {
  let numA = "", numB = "";
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0)
      numA += num_list[i];
    else
      numB += num_list[i];

  }
  return +numA + +numB;
}
//문자열 앞에 +가 붙으면 암묵적으로 타입 변환이 일어나서 숫자형으로 바뀜.

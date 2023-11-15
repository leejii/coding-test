/*
https://school.programmers.co.kr/learn/courses/30/lessons/181949

[문제설명]

영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

#대소문자 #문자열나누기 #문자열합치기
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = str.split('').map(i => {
        return i.toUpperCase() == i ? i.toLowerCase() : i.toUpperCase()
    })
    console.log(answer.join(''))
});


//다른답

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    str.forEach((value, index) => {
        if (value === value.toUpperCase()) {
            str[index] = value.toLowerCase();
        } else {
            str[index] = value.toUpperCase();
        }
    });
    console.log(str.join(''));
});

rl.on('line', (line) => {
    input = [...line];
  }).on('close', () => {
    console.log(
      input.map((char) => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())).join(''),
    );
  });

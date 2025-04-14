const { odd, even } = require('./var'); //파일경로에서 확장자 생략 가능

const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2) { //홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10)); //CJS 짝수
console.log(checkStringOddOrEven('hello')); //CJS 홀수
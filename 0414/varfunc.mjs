import { odd, even } from './var.mjs';
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10)); //MJS 짝수
console.log(checkStringOddOrEven('hello')) //MJS 홀수
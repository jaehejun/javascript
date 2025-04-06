// // p34 연습문제

// for (let i = 0.1; i < 1; i = i + 0.1)
// {
//     console.log(parseFloat(i.toFixed(1)));
// }

// // p35 연습문제

// for (let i = 1; i < 11; i++)
// {
//     let sqrt = Math.sqrt(i);
//     if (sqrt.toString().length > 1)
//         console.log((`${i} ${sqrt}`));
// }

// // p36 연습문제

// const today = new Date();
// const WEEK_NAMES = '일월화수목금토';
// let day = WEEK_NAMES[today.getDay()];
// console.log(`오늘은 ${day}요일 입니다.`);

// p37 연습문제

function addPoints(a, b)
{
    let aStr = a.toString();
    let bStr = b.toString();
    let aLen, bLen = 0;
    let maxLen;
    let sum;

    console.log(aStr.split('.'));
    console.log(typeof(aStr.split('.')));
    console.log(bStr.split('.'));
    console.log(typeof(bStr.split('.')));

    if (aStr.includes('.'))
        aLen = aStr.split('.')[1].length;
    if (bStr.includes('.'))
        bLen = bStr.split('.')[1].length;

    maxLen = aLen > bLen ? aLen : bLen;
    sum = (a + b).toFixed(maxLen);

    return (sum);
}

console.log(addPoints(0.21354, 0.1));
console.log(addPoints(0.14, 0.28));
console.log(addPoints(0.34, 0.226));
console.log(addPoints(10.34, 200.226));
console.log(addPoints(0.143, -10.28));
console.log(addPoints(0.143, -10));



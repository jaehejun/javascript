// console.log("hello world");

// console.log(x); // 호이스팅 -> var x; -> undefined 출력 

// var x = 1.123456789;
// var y = "js"
// console.log(x);
// console.log(y)

// var card = {suit:"heart", rank:"A"};
// var card = {"suit":"하트", 'rank':'A'};
// console.log(card);
// console.log(card.suit);
// console.log(card["rank"]);
// console.log(card.color);

// card.value = 1;
// console.log(card);
// delete card.rank;
// console.log(card);

// var obj = {};
// console.log(obj);
// var obj2 = [];
// console.log(obj2);

// console.log("suit" in card);
// console.log("color" in card);

// var a = card;
// console.log(a.suit);
// a.suit = "spade";
// console.log(a.suit);
// console.log(card.suit);

// console.log(square(3));

// function square(x){
//     return x*x;
// }

// var func = square(3);
// console.log(func);

// function add(x,y){
//     return x+y;
// }

// console.log(add(1,2));

// function bark(){
//     console.log('멍멍');
// }
// bark();

// var sq = square;
// console.log(sq(5));

// function add1(x){
//     return x = x+1;
// }

// var a = 3;
// var b = add1(a);
// console.log(`a = ${a}, b = ${b}`);

// function add1(p){
//     p.x = p.x+1; p.y = p.y+1;
//     return p;
// }

// var a = {x:3, y:4};
// var b = add1(a);
// console.log(a,b);

// var a = "global";
// function f(){
//     var b = "local";
//     console.log(a); // "global"
//     return b;
// }
// f();
// console.log(b);

// var a = "global";
// function f(){
//     var a = "local";
//     console.log(a); // "local"
//     return a;
// }
// f();
// console.log(a);

// function f(){
//     console.log(a); //undefined
//     var a = "local";
//     console.log(a); //local
//     return a;
// }

// f();

function f(){
    a = "local"; // 변수 선언하지 않은 상태에서 값을 대입하면 전역 변수로 선언됨됨
    console.log(a); //local
    return a;
}
f();
console.log(a); //local
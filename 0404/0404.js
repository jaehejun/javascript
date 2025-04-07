// var sym1 = Symbol();
// var sym2 = Symbol();
// console.log(sym1 == sym2);
// var CONAN = Symbol("코난");
// console.log(CONAN.toString());
// cosole.log(CONAN);

// var NONE = 0;
// var BLACK = -1;
// var WHITE = 1;

// var NONE = Symbol("none");
// var BLACK = Symbol("none");
// var WHITE = Symbol("none");
// console.log(NONE);
// console.log(BLACK);
// console.log(WHITE);

// var sym1 = Symbol.for("club");
// var sym2 = Symbol.for("club");
// console.log(sym1 == sym2);

// var sym1 = Symbol.for("club")
// var sym2 = Symbol("club")
// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym2));

// var a = `Yesterday is history.
// Tomorrow is a mystery.
// Today is a gift.
// That's why it's called the present`
// console.log(a);

// var now = new Date();
// console.log(`오늘은 ${now.getMonth()+1} 월 ${now.getDate()}일입니다`);
// console.log(now);

// let x = "outer x";
// {
//     let x = "inner x";
//     let y = "inner y";
//     console.log(x);
//     console.log(y);
// }
// console.log(x);
// console.log(y);

// var x = "outer x";
// {
//     var x = "inner x";
//     var y = "inner y";
//     console.log(x);
//     console.log(y);
// }
// console.log(x);
// console.log(y);

// console.log(x);
// let x = 5;

// let x;
// let x;

// const c = 2;
// c = 5;

// const origin = {x:1, y:2};
// origin.x = 3;
// console.log(origin);
// delete origin.x;
// console.log(origin);
// delete origin.y;
// console.log(origin);
// // origin = {x:1, y:2};
// // console.log(origin);
// delete origin;
// console.log(origin);

// let origin = {x:1, y:2};
// origin.x = 3;
// console.log(origin);
// origin = {a:5, b:6};
// console.log(origin);

// var circle = {
//     center:{x:1.0, y:2.0},
//     radius:1,
//     area:function(){
//         return Math.PI*this.radius*this.radius;
//     }
// }
// console.log(circle.center);
// console.log(circle.area());

// circle.move = function(delta_x, delta_y){
//     this.center.x = this.center.x + delta_x;
//     this.center.y = this.center.y + delta_y;
// }
// circle.move(2,2);
// console.log(circle);

// console.log(7/2);
// console.log(15%4);
// console.log(5%1.5);
// console.log(1 + "2month");
// console.log(0/0); // Not a Number
// console.log("one"*1);
// console.log(true+true);
// console.log(1+null);
// console.log(1+undefined);

// console.log("Hello " + "World!");
// console.log("1" + "2");
// console.log(10 + "little indians");
// console.log(1 + {});
// console.log(true + (new Date()));

// var msg = new String("0123456789abcdef");
// console.log(msg);
// console.log(msg.charAt(15));
// console.log(msg.substring(7,10));
// console.log(msg.slice(7,10));
// console.log(msg.slice(-3));
// console.log(msg.slice(-9,-6));
// console.log(msg.indexOf("a"));
// console.log(msg.indexOf("a",15));
// console.log(msg.split("a"));
// console.log(msg.replace("a","A"));
// console.log(msg.toUpperCase());
// console.log(msg.endsWith("."));
// console.log(msg.includes("abc"));

// var msg = new String("Today is a gift");
// console.log(msg[3]);
// console.log(msg[msg.length-1]);
// msg[3] = "R";
// console.log(msg[3]);
// console.log(String.length);

// var a = [1,2,3];
// var b = [1,2,3];
// var c = a;
// console.log(a==b);
// console.log(a==c);

// console.log(null==undefined);
// console.log(1=="1");
// console.log("0xff"==255);
// console.log(0xff==255);
// console.log(true==1);
// console.log(true=="1");
// console.log((new String("a"))=="a");
// console.log((new Number(2))==2);
// console.log([2]==2);

// console.log(null===undefined);
// console.log(1==="1");
// console.log("0xff"===255);
// console.log(0xff===255);
// console.log(true===1);
// console.log(true==="1");
// console.log((new String("a"))==="a");
// console.log((new Number(2))===2);
// // console.log([2]===2);

// var p = null;
// console.log(p&&p.name);
// if (p&&p.name)
//     console.log(true);
// else
//     console.log(false);
// p={name:"conan", age:30};
// console.log(p&&p.name);
// console.log(typeof(p&&p.name));
// if (p&&p.name)
//     console.log(true);
// else
//     console.log(false);

// console.log(typeof(12));
// console.log(typeof("abc"));
// console.log(typeof(true));
// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(typeof(Symbol("heart")));
// console.log(typeof([1,2,3]));
// console.log(typeof(function(x){return ++x;}));

// console.log(Number("3.14159"));
// console.log(Number(123));
// console.log(Number(true));
// console.log(Number(NaN));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number([1,2,3]));

// var n = 0x1a;
// var str = "1";
// console.log(n);
// console.log(n.toString());
// console.log(n.toString(2));
// console.log(n.toString(16));
// console.log(Number(str));
// console.log(Number(n));

// console.log(parseInt("3.14 meters"));
// console.log(parseFloat("3.14 meters"));
// console.log(parseInt("0xFF"));
// console.log(parseInt("0.5"));
// console.log(parseInt(".5"));
// console.log(parseInt("abc"));


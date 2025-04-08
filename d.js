[a,b] = [1,2];
console.log(a,b);
[a,b] = [2*a,3*b]; // a=2 b=6
console.log(a,b);
[a,b] = [b,a]; // a=6 b=2
console.log(a,b);

[a,b,c] = [1,2]; //a=1,b=2,c=undefined
console.log(a,b,c);
[a,b] = [1,2,3] // a=1,b=2,3은무시
console.log(a,b);
[,a,,b] = [1,2,3,4] // a=2,b=4
console.log(a,b);

var array,first,second;
array = [first,second] = [1,2,3,4];
console.log(array);
console.log(first,second);

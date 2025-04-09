// const user = {
//     name: 'Alice',
//     age: 25,
//     job: 'developer'
// };

// const keys = Object.keys(user);
// console.log(keys);

// const values = Object.values(user);
// console.log(values);

// const entries = Object.entries(user);
// console.log(entries);

// var a = [1,2,3,4,5];
// var sum = 0;

// a.forEach(function(value) {
//     sum += value;
// })

// console.log(sum);

// a.forEach(function(value,index,array){
//     array[index] = value*value;
// });
// console.log(a);

// const numbers = [10,20,30];
// numbers.forEach(function(num){
//     console.log(num);
// });

// const fruits = ['apple','banana','cherry'];
// fruits.forEach(function(fruit,index){
//     // console.log(`${index}:${fruit}`);
//     console.log(index,':', fruit);
// });

// fruits.forEach((fruit, index) => {
//     console.log(`${index} : ${fruit.toUpperCase()}`);
// });

// const user = {
//     name: 'Alice',
//     age: 25,
//     job: 'Developer'
// };

// keys = Object.keys(user);
// console.log("key: ",keys);
// values = Object.values(user);
// console.log("value: ",values);
// entries = Object.entries(user);
// console.log("entry: ",entries);

// Object.keys()

// Object.keys(user).forEach(key => {
//     console.log(`${key} : ${user[key]}`);
// })

const users = [
    { id:1, name:'홍길동', tel:'01088889991', addr:'서울'},
    { id:2, name:'김길동', tel:'01088889992', addr:'부산'},
    { id:3, name:'이길동', tel:'01088889993', addr:'서울'},
    { id:4, name:'박길동', tel:'01088889994', addr:'서울'},
    ];

// const keys = Object.keys(users[0]);
// console.log(keys);
// const values = Object.values(users[0]);
// console.log(values);
// const entries = Object.entries(users[0]);
// console.log(entries);

// 배열.forEach(value,index,array)
// Object.keys/values/entries(객체)

// users.forEach((user) => {
//     Object.values(user).forEach(value => {
//         console.log(value);
//     });
// });

users.forEach((user) => {
    Object.entries(user).forEach(entry => {
        console.log(entry);
    });
});
console.log((
    'b'+'a'+ +'a'+'a'
).toLowerCase())
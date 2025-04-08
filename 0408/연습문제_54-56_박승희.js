//Question 1
const user = {id:1, name:'Honh', addr:{city:'Seoul'}};
function f1 (user){
    console.log(user.id, user.name);
}
function f2({ id, name }){
    console.log(id, name);
}
const hong = {id:1, name:'Hong'};
const lee = {id:2, name:'Lee'};
f1(hong);
f2(lee);
//Question 2
const user2 = {id:1, name :'Hong', passwd:'xxx', addr:'Seoul'};
const { passwd, ...userInfo } = user2;
console.log(userInfo);
//Question 3
const arr = [[{id:1}],[{id:2},{id:3}]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
// --------------------- page 102 ---------------------
const arr = [100, 200, 300, 400, 500, 600, 700];
// 1. for-in 문을 사용하여 배열의 인덱스(키)를 출력하시오.
for (var prop in arr) {
  console.log(prop);
}
// 2. for-in 문을 사용하여 배열의 원소(값)을 출력하시오.(of)
for (var value of arr) {
  console.log(value);
}
const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };
// 3. for-in 문을 사용하여 프로퍼티 이름(키)을 출력하시오.
for (var key in obj) {
  console.log(key);
}
// 4. for-in 문을 사용하여 프로퍼티 값을 출력하시오.
for (var key in obj) {
  console.log(obj[key]);
}
// 5. for-of 문을 사용하여 프로퍼티 값을 출력하시오.
for (const value of Object.values(obj)) {
  console.log(value);
}
// 6. level 프로퍼티가 열거(entries) 되지 않도록 설정
console.log(obj.propertyIsEnumerable("level")); // true 출력
Object.defineProperty(obj, "level", {
  enumerable: false,
});
console.log(obj.propertyIsEnumerable("level")); // false 출력
// --------------------- page 103 ---------------------
data = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];
// 배열을 객체로 만드시오.
function makeObjectFromArray(arr) {
  let obj = {};
  var gun = arr.legnth;
  for (var value of arr) {
    obj[value[0]] = value.slice(1, arr.length);
  }
  return obj;
}
data = makeObjectFromArray(data);
console.log(data);
// 위에서 만든 객체를 다시 배열로 만드시오.
function makeArrayFromObject(obj) {
  let arr = [];
  for (var key in obj) {
    arr.push([key, ...obj[key]]);
  }
  return arr;
}
data = makeArrayFromObject(data);
console.log(data);
// --------------------- page 104 ---------------------
// 원시값(primitive) 만을 갖는 객체 kim 을 복사하는 프로그램을
// Object 의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.
// 1) shallow copy
function shallowCopy(obj) {
  const newObj = {};
  for (const key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
const newKim1 = shallowCopy(kim);
newKim1.addr = "Daegu";
console.log(kim.addr !== newKim1.addr); // true 면 통과 !
// 2) 이하 deep copy
function deepCopy(obj) {
  let newObj = JSON.stringify(obj);
  newObj = JSON.parse(newObj);
  return newObj;
}
const kim2 = {
  nid: 3,
  nm: "Kim",
  addr: { city: "Pusan", road: "Haeundaero", zip: null },
};
const newKim2 = deepCopy(kim2);
newKim2.addr.city = "Daegu";
console.log(kim2.addr.city !== newKim2.addr.city); // true 면 통과 !
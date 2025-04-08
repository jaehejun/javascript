// 1 ~ n 까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
// (단, array 메서드를 사용하지 말고, destructuring 을 사용하시오.)
function makeArray(n) {
    if (n === 1) {
      return [1];
    }
    return [...makeArray(n - 1), n];
  }
  function makeReverseArray(n) {
    if (n === 1) {
      return [1];
    }
    return [n, ...makeReverseArray(n - 1)];
  }
  function makeArrayTCO(n, acc = []) {
    if (n === 0) return acc;
    return makeArrayTCO(n - 1, [n, ...acc]);
  }
  console.log(makeArray(10));
  console.log(makeReverseArray(5));
  console.log(makeArrayTCO(10));
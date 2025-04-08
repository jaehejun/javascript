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

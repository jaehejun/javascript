//p280
const randTime = (val) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(val), Math.random() * val);
  });

randTime(100).then(console.log);
[1, 2, 3, 4, 5].forEach((a) => randTime(a).then(console.log));

//p281
const depthTimer = (depth) => {
  return new Promise((resolve, reject) => {
    if (depth > 3) {
      reject(new Error('Already 3-depth!'));
      return;
    }

    setTimeout(() => {
      console.log(`dept${depth}`, new Date());
      resolve(depth + 1);
    }, depth * 1000);
  });
};

console.log('start', new Date());
depthTimer(1).then(depthTimer).then(depthTimer).catch(console.error);
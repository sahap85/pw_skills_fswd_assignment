function curry(fn) {
  const args = [];
  return function curried(...newArgs) {
    args.push(...newArgs);
    if (args.length === fn.length) {
      return fn(...args);
    }
    return curried;
  };
}

const add = curry((a, b) => a + b);

const sum1 = add(5);
const sum2 = sum1(10);

console.log(sum2);

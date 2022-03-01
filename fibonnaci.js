//O(n^2)
//# total number of nodes in binary of height n is 2^n
const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(4));

//use memoization to avoid computing same input more than once
//define class that stores instance property memo that maps input to result
// call stack for each input, look up is O(1)
// runtime: O(n), O(n) space

class Fib {
  constructor() {
    this.memo = {};
  }
  fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (this.memo.hasOwnProperty(n)) {
      return this.memo[n];
    }
    const result = this.fib(n - 1) + this.fib(n - 2);

    // Memoize
    this.memo[n] = result;

    return result;
  }
}

const fib5 = new Fib();
console.log(fib5.fib(3));

//bottom up approach, avoid recursion and save memory by eliminating call stacks caused by recursion  
//O(n) time O(1) spa
function fibBottomUp(n) {

  // Edge cases:
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    return n;
  }

  // We'll be building the fibonacci series from the bottom up
  // So we'll need to track the previous 2 numbers at each step
  let prevPrev = 0;  // 0th fibonacci
  let prev = 1;      // 1st fibonacci
  let current;       // Declare current

  for (let i = 1; i < n; i++) {

    // Iteration 1: current = 2nd fibonacci
    // Iteration 2: current = 3rd fibonacci
    // Iteration 3: current = 4th fibonacci
    // To get nth fibonacci ... do n-1 iterations.
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}
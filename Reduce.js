// Variables and Local Methods
let items = [1, 2, 3, 4, 5];
let plus = (x, y) => x + y;

// Public Methods

// Loop Version of Reduce
let ReduceLoop = (acc, fn, arr) => {
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }

  // autoboxing in array?
  return acc;
}

// recursive Version of Reduce
let ReduceRecursive = (fn, acc, [head, ...tail]) => {
  if (head === undefined) {
    return acc;
  }

  return ReduceRecursive(fn, fn(acc, head), tail);
};

// Execution
console.log(ReduceLoop(0, plus, items));
console.log(ReduceRecursive(plus, 0, items));
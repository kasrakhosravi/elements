
// Variables and Local Methods
let items = [1, 2, 3, 4, 5];
let double = (item) => item * 2;

// Public Methods

// Loop Version of Map
let MapLoop = (fn, arr) => {
  const mappedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let mapped = fn(arr[i]);

    mappedArr.push(mapped);
  }

  return mappedArr;
};

// Recursive Version of Map
let MapRecursive = (fn, [head, ...tail]) => {

  // bailout
  if (head === undefined) {
    return [];
  }
  
  return[fn(head), ...MapRecursive(fn, tail)];
};

// Execution
console.log(MapLoop(double, items));
console.log(MapRecursive(double, items));

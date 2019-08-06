// Variables and Local Methods
let items = [1, 2, 3, 4, 5];
let isEven = (item) => item % 2 === 0;

// Public Methods

// Loop Version of Filter
let FilterLoop = (validFn, arr) => {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    validFn(arr[i]) ? filteredArr.push(arr[i]) : null;
  }

  return filteredArr;
};

// Recursive Version of Filter
let FilterRecursive = (validFn, [head, ...tail]) => {

  // bailout
  if (head === undefined) {
    return [];
  }

  if (validFn(head)) {
    return[head, ...FilterRecursive(validFn, tail)];
  }
  
  return[...FilterRecursive(validFn, tail)];
};

// Prototype version of Filter for Arrays
Array.prototype.filter = function(validator) {
  const items = this;
  const result = [];

  for (var i = 0; i < items.length; i++) {
    var item = items[0];

    if (validator(item)) {
      result.push(item);
    }
  }

  return result;
}

// Execution
console.log(FilterLoop(isEven, items));
console.log(FilterRecursive(isEven, items));
console.log(items.filter(isEven));

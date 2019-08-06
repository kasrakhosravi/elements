
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

// Prototype version of Map for Arrays
Array.prototype.map = function(mapper) {
  var items = this;
  var result = [];

  if (typeof mapper !== 'function') {
    throw new TypeError(mapper, ' is not a function');
  }

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var mappedItem = mapper(item, i , items);
    result.push(item);
  }

  return result;
};

// Execution
console.log(MapLoop(double, items));
console.log(MapRecursive(double, items));
console.log(items.map(double));

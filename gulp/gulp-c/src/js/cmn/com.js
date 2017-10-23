export function maparr(fn,array) {
  var mappedArr = [];
  for(var i = 0; i< array.length; i++) {
    mappedArr.push(fn(array[i]))
  }
  return mappedArr;
}
export function sum(a,b) {
  return a+b;
}

// export maparr = maparr;
// export sum = sum;
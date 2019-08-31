const fibonacci = function(x) {
  x = parseInt(x);
  let fib = [1, 1];
  let result = 0;
  if(x < 1) return "OOPS"
  if (x == 1) return 1;
  if (x == 2) return 1;
  for(i=2; i<x; i++){
    result = fib[i-1] + fib[i-2];
    fib.push(result);
  }
  return result;
}

module.exports = fibonacci

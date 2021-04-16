// Fibonacci Sequence Up to a Certain Number
// Input: 12
// Output: 0 1 1 2 3 5 8

function fibonacciSeries(num){
  let n1 = 0,
      n2 = 1,
      nextTerm = n1 + n2; 
  console.log(n1);
  console.log(n2);
  while (nextTerm <= num) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  return true;
}

fibonacciSeries(12);
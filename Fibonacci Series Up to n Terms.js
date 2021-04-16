// Fibonacci Series Up to n Terms
// Input: 5
// Output: 0 1 1 2 3


//Method 1 - Using for loop
function fibonacciSeries1(num) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  console.log(n1);
  console.log(n2);

  for (let i = 2; i < num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(n2);
  }
  return true;
}

fibonacciSeries1(8);

//Method 2 - Using while loop
function fibonacciSeries2(num) {
  let n1 = 0,
    n2 = 1,
    nextTerm,
    i = 2;
  console.log(n1);
  console.log(n2);

  while (i < num) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(n2);
    i++;
  }
  return true;
}

fibonacciSeries2(8);
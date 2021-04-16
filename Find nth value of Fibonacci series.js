// Fibonacci Series Up to n Terms
// Fibonacci Series: 0 1 1 2 3 5 8 13 21
// Input: 5
// Output: 3


//Method 1 - Using for loop
function fibonacciSeries1(num) {
    let n1 = 0,
        n2 = 1,
        nextTerm;
    if (num === 1) {
        console.log(0);
        return 0;
    }
    if (num === 2) {
        console.log(1);
        return 1;
    }
    for (let i = 2; i < num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    console.log(n2);
    return n2;
}

fibonacciSeries1(8);

//Method 2 - Using while loop
function fibonacciSeries2(num) {
    let n1 = 0,
        n2 = 1,
        nextTerm,
        i = 2;
    if (num === 1) {
        console.log(0);
        return 0;
    }
    if (num === 2) {
        console.log(1);
        return 1;
    }
    while (i < num) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        i++;
    }
    console.log(n2);
    return n2;
}

fibonacciSeries2(5);

//Method 3 - Using Recursion
function fibonacciSeries3(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacciSeries3(num - 1) + fibonacciSeries3(num - 2);
}

const getFibNum = fibonacciSeries3(5);
console.log(getFibNum);
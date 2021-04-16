//Find the sum of the series(1/4+2/16+3/256+....N) till number N
//Input = 5
//Output = 0.3867797863204032

//Method 1 - Using for loop
function numberSeries(n) {
    let divident = 2;
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i / (divident * divident);
        divident = divident * divident;
    }
    return result;
}
numberSeries(5);

//Method 2 - Using Recursion
function findDivident(n) {
    let res = 2;
    for (let i = 1; i <= n; i++) {
        res *= res;
    }
    return res;
}
function numberSeries(n) {
    let divident = findDivident(n);
    let result = n / divident;
    if (n > 0) {
        return result + numberSeries(n - 1);
    } else {
        return 0;
    }
}
numberSeries(5);

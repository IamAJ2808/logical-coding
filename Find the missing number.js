//Find the missing Number in an array
//Input = [1,2,4,5]
//Output = 3

function getMissingNum(arr){
    let n = arr.length;
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for(let i=0;i<n;i++){
        total -= arr[i];
    }
    return total;
}

//Find the missing Numbers in an array
//Input = [1,2,4,5,7,9]
//Output = [3,6,8]

function findMissingNums(arr){
    let lastNum = arr[arr.length-1];
    let missing = [];

    for(let i=1;i<lastNum;i++){
        if(arr.indexOf(i) === -1){
            missing.push(i);
        }
    }
    console.log(missing);
    return missing;
}
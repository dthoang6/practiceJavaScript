//function that returns an array of consecutive integers starting with 1 through the number passed to the function

function countUp(n){
    //base case: tells the recursive function to stop call itself and return the empty array.
    if (n<1) {
        return [];
    }
    //recursive call: executes the original function with different arguments until reach the base case.
    else {
        const countArray = countUp(n - 1);
        countArray.push(n);
        return countArray;
    }
}
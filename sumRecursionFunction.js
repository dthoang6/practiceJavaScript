//write a recursive funce, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    //base case
    if (n <=0) {
        return 0;
    }
    else {
        return sum(arr, n-1) + arr[n-1];
    }
}
//defined a function called countdown. The function will use recursion to return an array containing n through 1 based on n parameter.

function countDown(n) {
    if (n < 1) {
        return [];
    }
    else {
        const countArray = countDown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
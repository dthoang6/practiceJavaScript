/*
- Return a value fron a function with Return statement.
- Understanding undefined value returned from a funciton.
*/

function plusTen(para1) {
    return 10 + para1;
}
console.log(plusTen(5));

//if the function does not have a return statement, the function processes the inner code but the returned value is undefined.

var x = 0;
function plusTwo() {
    x += 4;
}
console.log(plusTwo());
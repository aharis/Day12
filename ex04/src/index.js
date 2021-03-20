
// Only change code below this line
function sumFibonacci(num) {

    if(num <= 1) return num;

    return sumFibonacci(num-1) + sumFibonacci(num -2 );
}

// Only change code above this line

console.log(sumFibonacci(1));
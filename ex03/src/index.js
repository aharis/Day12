
 // Only change code below this line

const myRecursion = require("../../ex01/src");

 function rangeOfNumbers(startNum, endNum) {

    if (endNum - startNum === 0) {

      return [startNum];

    } else {
        
      var numbers = rangeOfNumbers(startNum, endNum - 1);

       numbers.push(endNum);
    
      return numbers;
    }
  }
// Only change code above this line

console.log(rangeOfNumbers( 1, 7));
console.log(rangeOfNumbers( 3, 10));
console.log(rangeOfNumbers( 5, 5));
console.log(rangeOfNumbers( 7, 5));

module.exports = rangeOfNumbers;
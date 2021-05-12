// * Write a JavaScript program to get the first n Fibonacci numbers.

// * Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
// - fibonnaci(0)=> [0]
// - fibonnaci(1)=> [0,1]
// - fibonnaci(2)=> [0,1,1]
// - fibonnaci(8)=> [0, 1, 1, 2, 3, 5, 8, 13,21]
 
// ```javascript
//     fibonnaci(8) //  [0, 1, 1, 2, 3, 5, 8, 13,21]  
// ```
//FibNUmber(n) = FibNUmber(n-1) + FibNUmber(n-2)


function fibonacci(n){
    if (n <= 0) {
        return [0];
    } else if (n === 1) 
    {
        return [0, 1];
    }
     else 
    {
    const res = fibonacci(n - 1);
    res.push(res[res.length - 1] + res[res.length - 2]);
    return res;
  }
};
  


console.log(fibonacci(0))   //=> [0]
console.log(fibonacci(1))   //=> [0,1]
console.log(fibonacci(2))   //=> [0,1,1]
console.log(fibonacci(3))   //=> [0,1,1,2]
console.log(fibonacci(4))   //=> [0,1,1,2,3]
console.log(fibonacci(8))   //=> [0, 1, 1, 2, 3, 5, 8, 13,21]
console.log(fibonacci(9))  //=>  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]  
console.log(fibonacci(10))  //=>  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]  


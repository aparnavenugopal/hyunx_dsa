const Factorial = n => {
    if(n == 1 || n == 0) return 1;
    if(n < 0) return undefined;
    return n*Factorial(n-1);
}

const fact = Factorial(-3);
console.log(fact);

//range of numbers

// const range = (start, end) => {
//     if(start >= end) return [];
//     return [start+1, ...range(start+1,end)];
// }

// console.log(range(0,5));
const Factorial = n => {
    if(n === 0){
        return 1;
    }
    if( n < 0){
        return undefined;
    }
    if(n > 0){
        return Factorial(n-1) *n;
    }
}

const fact = Factorial(5);
console.log(fact);
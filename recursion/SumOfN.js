const sumOfNNumbers = (n) => {
    if(n < 0 || n == 0) return 0;
     return sumOfNNumbers(n-1)+n;
}

const t = sumOfNNumbers(5);
console.log(t);
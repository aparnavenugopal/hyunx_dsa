const Target = (arr, n) => {
   const filteredArr = arr.filter(num => num <= n);
   let MaxNumber = Math.max(...filteredArr);
   let MaxIndex = arr.indexOf(MaxNumber);
   let d = n - MaxNumber;

   for (let i = 0; i < arr.length; i++) {
       if (arr[i] === d) {
           return [MaxIndex, i];
       }
   }

   return null;
}

const t = Target([0,1,11,15,7,2], 9);
console.log(t);
const MaxOfAll = (arr, k) =>{
   let i = 0;
   let window =[];
   let result = [];
   let j = 0;
   while(j < arr.length){
    window.push(arr[j]);
    if(j-i+1< k){
        j++;
    }else if(j-i+1 == k){
        result.push(Math.max(...window));
        window.shift();
        i++;
        j++;
    }
   }
   return result
}

const t = MaxOfAll([1,3,-1,-3, 5,3,6,7], 3);
console.log(t);
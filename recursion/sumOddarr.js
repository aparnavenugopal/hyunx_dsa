const sumOfOddNumInArr = (arr, index=0) =>{
    if(index == arr.length) return 0;
    if(arr[index]%2 !== 0){
        return arr[index] + sumOfOddNumInArr(arr, index+1);
    }else{
        return sumOfOddNumInArr(arr, index+1);
    }
}

const t = sumOfOddNumInArr([2,4,6,8]);
console.log(t);
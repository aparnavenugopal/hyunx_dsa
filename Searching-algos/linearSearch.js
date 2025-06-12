const linearSearch = (arr, target) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

const t = linearSearch([4,9,1,0,2],4);
console.log(t);
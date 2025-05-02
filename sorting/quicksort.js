const quickSortwithTwoArrays = (arr) => {
    if(arr.length <= 1) return arr;
    let left = [];
    let right = [];
    const pivot = arr[0];
    
    for(let i=1;i< arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else if(arr[i]> pivot){
            right.push(arr[i]);
        }
    }
    return [...quickSortwithTwoArrays(left), pivot, ...quickSortwithTwoArrays(right)];
}

const t = quickSortwithTwoArrays([4,2,7,1,3,6,5]);
console.log(t); 
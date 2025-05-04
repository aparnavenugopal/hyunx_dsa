const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length /2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const merge = (left, right) => {
    let sorrtedArray = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            sorrtedArray.push(left.shift());
        }else{
            sorrtedArray.push(right.shift());
        }
    }
    return [...sorrtedArray, ...left, ...right];
}

const arr = [5, 3, 8, 4, 2, 7, 1, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
//o(nlog(n)) worst case
//o(nlog(n)) best case
//o(n) space complexity
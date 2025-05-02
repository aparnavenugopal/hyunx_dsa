const quickSortWithOneArray = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;

    //partitioning step
    let pivotIndex = partition(arr, start, end);
    //recursive step
    quickSortWithOneArray(arr, start, pivotIndex - 1);
    quickSortWithOneArray(arr, pivotIndex + 1, end);

}

const partition = (arr, start, end) => {
    let pivot = arr[start];
    let left = start + 1;
    let right = end;

    while (left <= right) {
        while (left <= right && arr[left] <= pivot) left++;
        while (left <= right && arr[right] > pivot) right--;

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }

    [arr[start], arr[right]] = [arr[right], arr[start]];
    return right;
};

let arr = [5, 3, 8, 4, 2, 7, 1, 10];
quickSortWithOneArray(arr);
console.log(arr); 

//o(n^2) worst case
//o(log(n)) best case

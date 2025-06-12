function findFirstOccurrence(arr, index, target) {
    if (index === arr.length) return -1;  // Base case: reached end of array
    if (arr[index] === target) return index;  // Found the first occurrence
    return findFirstOccurrence(arr, index + 1, target);  // Check next element
}

//linear search using recurssion

const linearSearchre = (arr, n, target) => {
    if(n == arr.length) return false;
    if(arr[n] == target) return true;
    return linearSearchre(arr, n+1, target);
}

const t = linearSearchre([1,3,5,7], 0,15);
console.log(t);

const reverse = (a, n, p) =>{
  if(n < 0) return p;
  p.push(a[n]);
  return reverse(a, n - 1, p);
}

const arr = [1,3,5,7];
const r = reverse(arr, arr.length - 1, []);
console.log(r);
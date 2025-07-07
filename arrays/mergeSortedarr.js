const mergeSortedArrays = (a, b) => {
  let result = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }

  // Push remaining elements
  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);

  return result;
};



const t = mergeSortedArrays([3,4,5,7], [2,5,8,9]);
console.log(t);
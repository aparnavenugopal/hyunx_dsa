const containsDuplicate = (a, k) => {
  let map = new Map();
  let i = 0;
  let j = 0;

  while (j < a.length) {
    const num = a[j];
    map.set(num, (map.get(num) ?? 0) + 1);

    if (j - i < k) {
      if (map.get(num) > 1) return true;
      j++;
    } else if (j - i === k) {
      if (map.get(num) > 1) return true;
      const leftNum = a[i];
      map.set(leftNum, map.get(leftNum) - 1);
      if (map.get(leftNum) === 0) map.delete(leftNum);
      i++;
      j++;
    }
  }

  return false;
};

const t = containsDuplicate([1,2,1,9,0,1], 3);
console.log(t);
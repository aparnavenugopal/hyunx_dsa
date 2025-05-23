const pickToy = (s, k) => {
  let i=0, j=0;
  let maxLen = 0;
  let map = new Map();
  while(j < s.length){
    let endChar = s[j];
    map.set(endChar,( map.get(endChar) ?? 0) + 1);
    if(map.size < k){
    }
    if(map.size == k){
        maxLen = Math.max(maxLen, j-i+1);
    }
    while(map.size > k){
        let startChar = s[i];
        map.set(startChar, (map.get(startChar) ?? 0) -1);
        if(map.get(startChar) == 0){
            map.delete(startChar);
        }
        i++;
    }
    j++;
  }
  return maxLen;
}
const t = pickToy('abaccabe', 2);
console.log(t);
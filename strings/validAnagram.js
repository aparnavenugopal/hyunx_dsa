const validAnagram = (s,t) => {
  let sMap = new Map();
  let rMap = new Map();
  for(let i of s){
    sMap.set(i,(sMap.get(i) || 0)+ 1);
  }
  for(let r of t){
    rMap.set(r,(rMap.get(r) || 0)+ 1);
  }
  if(sMap.size !== rMap.size) return false;
  for(let [key, val] of sMap){
    if(rMap.get(key) !== val){
        return false;
    }
  }
  return true;
}

const p = validAnagram('anagram','nagaram');
console.log(p);
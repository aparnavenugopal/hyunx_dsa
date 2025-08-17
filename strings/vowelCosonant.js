const maxFrequency = (input) => {
  let sum = 0;
  let vcount=0;
  let tcount = 0;
  const vowels = ['a','e','i','o','u'];
  let inputMap = new Map();
  for(let i of input){
    inputMap.set(i,(inputMap.get(i) || 0) + 1);
  }
  for(let [ch, freq] of inputMap){
    if(vowels.includes(ch)){
        vcount = Math.max(vcount, freq);
    }else{
        tcount = Math.max(tcount, freq);
    }
  }
  return vcount+tcount;
}

const t = maxFrequency('ccctttuuee');
console.log(t);
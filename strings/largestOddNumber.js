const largestOddNumber = (s) => {
  s=s.split("");
  let m=0;
  for(let i=s.length-1;i>=0;i--){
    if(Number(s[i])%2 !== 0){
       return s.substring(0, i+1);
    }
  }
  return "";
}

const t = largestOddNumber('52');
console.log(t);
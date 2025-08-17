const validPlaindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
  let t = s.slice();
  let mid = Math.floor((s.length)/2);
  for(let i=0;i<mid;i++){
    let temp = s[i];
    s[i] = s[(s.length)-1-i];
    s[(s.length)-1-i] = temp;
  }
  for(let j=0;j<s.length;j++){
    if(s[j] !== t[j]){
        return false;
    }
  }
  return true;

}

const t = validPlaindrome('A man, a plan, a canal: Panama');
console.log(t);
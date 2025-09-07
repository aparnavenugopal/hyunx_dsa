//brute force using linear search

const linear = (x) => {
  let i=0;
  while((i*i)<=x){
     i++;
  }
  return i-1;
}

const t = linear(9);
console.log(t);

//using binary search algorithm

const binary = (x) => {
    if(x<2) return x;
    let l = 2;
    let r = Math.floor(x/2);
    while(l<=r){
        let m = Math.floor((l+r)/2);
        if(x === m**2){
            return m;
        }else if(x < m**2){
            r=m-1;
        }else{
            l = m+1;
        }
    }
    return r;
}
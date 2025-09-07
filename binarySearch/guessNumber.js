const guess = (n, pick) => {
    let l=1;
    let r = n;
    while(l<=r){
        let m = Math.floor((l+r)/2);
        if(m === pick) return true;
        if(m < pick){
            l = m+1;
        }else if(m > pick){
            r = m-1;
        }
    }
    return false;
}

const t = guess(10,-6);
console.log(t);


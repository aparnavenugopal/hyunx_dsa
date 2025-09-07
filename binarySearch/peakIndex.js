const peakIndex = (arr) => {
  let l=0;
  let r = arr.length-1;
  while(l<r){
    let m = Math.floor((l+r)/2);
    if(arr[m]<arr[m+1]){
        l = m+1;
    }else if(arr[m] > arr[m+1]){
        r = m;
    }
  }
  return r;
}

const t = peakIndex([0,2,5,3,2,1,0]);
console.log(t);
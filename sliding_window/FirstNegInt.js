const firstNegInt = (arr, k) => {
  let neg = [];
  let result = [];
  let i=0;
  let j=0;
  while(j<arr.length){
    let wl = j-i+1;
    if(arr[j] < 0){
        neg.push(arr[j]);
    }
    if(wl == k){
        result.push(neg.length? neg[0]: 0);
        if(arr[i] == neg[0]){
            neg.shift();
        }
        i++;
    }
    j++
  }
  return result;
}

let p = firstNegInt([-1,4,-1,-6,4,-2,-8,-3,2,1],3);
console.log(p);
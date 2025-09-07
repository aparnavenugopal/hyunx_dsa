const minSort = (arr) => {
    let l = 0;
    let r = arr.length-1;
   
    while(l<r){
        let m = Math.floor((l+r)/2);
        if(arr[r] < arr[m]){
            l = m +1;
        }else if(arr[r] > arr[m]){
            r = m;
        }
    }
    return arr[l];
}

const t = minSort([6,7,8,0,1,2,3,4,5]);
console.log(t);
const rotate = (arr, target) => {
    let l1=0;
    let l2=0;
    let r2=arr.length-1;
    let r1=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            l2= i +1;
            r1= i;
            break;
        }
    }
    while (l1 <= r1 || l2 <= r2) {
        if (l1 <= r1) {
            let m1 = Math.floor((l1 + r1) / 2);
            if (target === arr[m1]) return m1;
            if (target < arr[m1]) r1 = m1 - 1;
            else l1 = m1 + 1;
        }
        if (l2 <= r2) {
            let m2 = Math.floor((l2 + r2) / 2);
            if (target === arr[m2]) return m2;
            if (target < arr[m2]) r2 = m2 - 1;
            else l2 = m2 + 1;
        }
    }
    return -1;

}

const t = rotate([4,5,6,7,8,0,1,2,3], 9);
console.log(t);
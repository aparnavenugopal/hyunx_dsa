const minSizeSubarray = (target, nums) => {
  let i=0, j=0;
  let m = Infinity;
  let sum = 0;
  while(j < nums.length){
    sum = sum+ nums[j];
    if(sum < target){
        j++;
    }else if(sum >= target){
        m = Math.min(m,(j-i+1));
        while(sum > target){
            sum = sum-nums[i];
            i++;
        }
        if(sum == target){
           m = Math.min(m,(j-i+1));
        }
        j++;
    }
  }
  return m === Infinity ? 0 : m;
}
const t = minSizeSubarray(11,[1,1,1,1,1,1,1]);
console.log(t);
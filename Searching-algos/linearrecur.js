const search = (nums, target) => {
  let i=0;
  const t = (i) => { 
     if(i > nums.length-1) return -1;
     if(nums[i] == target){
        return i;
     }
     return t(i+1);
  }
  return t(0);
}

const t = search([-1, 0,3,5,9,12], 9);
console.log(t);
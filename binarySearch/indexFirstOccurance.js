const index = (haystack, needle) => {
   let i=0;
   let j=0;
   let p=0;
   let k = needle.length;
   while(i<=j && j < haystack.length){
      if (j - i < k) {
        if(haystack[j] === needle[p]){
            j++;
            p++;
        }else{
            i = i + 1;
            j = i;
            p = 0;
        }
      }
      if (p === k) {
        return i;
      }
   }
   return -1;
}

const t = index('tsatbutsad','sad')
console.log(t);
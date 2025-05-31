const maxLengthSubstring = (s) => {
  let i=0, j=0;
  let maxLen = 0;
  let countMap = new Map();
  while(j< s.length){
     countMap.set(s[j], (countMap.get(s[j]) ?? 0) + 1);
     while([...countMap.values()].some(count => count > 2)){
         countMap.set(s[i], (countMap.get(s[i])) -1);
         if(countMap.get(s[i] === 0)){
            countMap.delete(s[i]);
         }
         i++;
     }
     maxLen = Math.max(maxLen, j-i+1);
     j++;
  }
  return maxLen;
}

const t = maxLengthSubstring("bcbbbcba");
console.log(t);

// function longestValidSubstring(s) {
//     let freqMap = new Map();
//     let i = 0, j = 0, maxLen = 0;

//     while (j < s.length) {
//         const char = s[j];
//         freqMap.set(char, (freqMap.get(char) || 0) + 1);

//         // ✅ Use a flag to check if any count > 2
//         let hasInvalid = false;
//         for (let count of freqMap.values()) {
//             if (count > 2) {
//                 hasInvalid = true;
//                 break;
//             }
//         }

//         while (hasInvalid) {
//             const leftChar = s[i];
//             freqMap.set(leftChar, freqMap.get(leftChar) - 1);
//             if (freqMap.get(leftChar) === 0) {
//                 freqMap.delete(leftChar);
//             }
//             i++;

//             // Recheck the condition
//             hasInvalid = false;
//             for (let count of freqMap.values()) {
//                 if (count > 2) {
//                     hasInvalid = true;
//                     break;
//                 }
//             }
//         }

//         maxLen = Math.max(maxLen, j - i + 1);
//         j++;
//     }

//     return maxLen;
// }
const DnaSeq = (s, k) =>{
    let i=0, j=0;
    let countMap = new Map();
    let resultMap = new Map();
    let ans = [];
    while(j< s.length){
        countMap.set(s[j], (countMap.get(s[j]) ?? 0) + 1);
        if(j-i+1 < k){
            j++;
        }else if(j-i+1 == k){
          let result = '';
          let startChar = s[i];
          for (const [key, value] of countMap.entries()) {
            result += key.repeat(value);
          }
          resultMap.set(result, (resultMap.get(result) ?? 0) + 1);
          result = '';
          countMap.set(startChar, countMap.get(startChar) - 1);
          if (countMap.get(startChar) === 0) countMap.delete(startChar);
          i++;
          j++;
        }
    }
        for (const [key, value] of resultMap.entries()) {
        if (value > 1) {
            ans.push(key);
        }
    }
   return ans;
}

const t = DnaSeq('AAAAA', 3);
console.log(t);

// You’re using a countMap to build a custom s
// tring from character frequencies, but this doesn’t preserve the original 
// order of characters in the substring.


// /**
//  * @param {string} s
//  * @return {string[]}
//  */
// var findRepeatedDnaSequences = function(s) {
//     let i = 0, j = 0;
//     let resultMap = new Map();
//     let ans = [];

//     while (j < s.length) {
//         if (j - i + 1 < 10) {
//             j++;
//         } else if (j - i + 1 === 10) {
//             let result = s.slice(i, j + 1);
//             resultMap.set(result, (resultMap.get(result) ?? 0) + 1);
//             i++;
//             j++;
//         }
//     }

//     for (const [key, value] of resultMap.entries()) {
//         if (value > 1) {
//             ans.push(key);
//         }
//     }

//     return ans;
// };
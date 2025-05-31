const goodSubstr = (s) =>{
    let i=0, j=0;
    let countMap = new Map();
    let resultMap = new Map();
    let sum = 0;
    while(j < s.length){
        let startChar = s[j];
        countMap.set(startChar, (countMap.get(startChar) ?? 0) + 1);
        if((j-i+1) < 3){
            j++;
        }else if((j-i+1) == 3){
            let endChar = s[i];
            let result = s.slice(i, j+1);
            let hasValue = [...countMap.values()].some(v => v >1);
            if(!hasValue){
                resultMap.set(result, (resultMap.get(result) ?? 0) + 1);
            }
            countMap.set(endChar, (countMap.get(endChar)) -1);
            if(countMap.get(endChar) == 0){
                countMap.delete(endChar);
            }
            i++;
            j++;
        }
    }
    for(let value of resultMap.values()){
        sum += value;
    }
    return sum;
}
const t = goodSubstr('xyzzaz');
console.log(t);
const JewelsStones = (jewels, stones) => {
    const jewelSet = new Set(jewels);
    const stoneMap = {};
    for (let i = 0; i < stones.length; i++) {
      const s = stones[i];
      stoneMap[s] = (stoneMap[s] || 0) + 1;
    }
    let count = 0;
    for(let j of jewelSet){
        if(stoneMap[j]){
            count += stoneMap[j];
        }
    }
    return count;
}
var myMap = new Map();

myMap.set(1, 'Uno');
myMap.set(2, 'dos');
myMap.set(3, 'tres');

console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`value is ${value}`);
// }

// for(let [key,value] of myMap){
//     console.log(`${key} : ${value}`)
// }

//hash map as frequency map usage

const getFrequency = (str) => {
  const freqMap = new Map();

  for(let char of str){
    if(freqMap.has(char)){
        freqMap.set(char, freqMap.get(char) + 1);
    }else{
        freqMap.set(char,1);
    }
  }
  return freqMap;
}

const t = getFrequency('aabac');
console.log(t);
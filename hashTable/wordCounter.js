const WordCounter = (text) => {
  let str =[];
  let word = [];
  let freqMap = {};
  for(let i=0;i< text.length; i++){
    if(text[i] !== ' '){
      word.push(text[i]);
    }else{
      str.push(word.join(''));
      word = [];
    }
  }
  if (word.length > 0) {
    str.push(word.join(''));
  }
  for(let w of str){
     if(freqMap[w]){
        freqMap[w]++;
     }else{
        freqMap[w] =1;
     }
  }
  return freqMap;
}

const t = WordCounter('Hello my name name name is huxn');
console.log(t); 
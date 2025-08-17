const balance = (s) => {
    let rcount=0;
    let lcount =0;
    let sum =0;
    for(let i=0;i<s.length;i++){
       if(s[i] == 'r'){
        rcount++;
       }else if(s[i] == 'l'){
        lcount++;
       }

       if(rcount == lcount){
         sum++;
         rcount =0;
         lcount =0;
       }
    }

  return sum;

}

const t = balance('llllrrrr');
console.log(t);
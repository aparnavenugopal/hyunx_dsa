const printNum = (n) => {
  if(n == 1){
    console.log(1);
    return;
  };
  // console.log(n);
  printNum(n-1);
  console.log(n);
 
}

const t = printNum(7);
console.log(t);
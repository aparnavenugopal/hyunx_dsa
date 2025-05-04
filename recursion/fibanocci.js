const fibonocci =(n) =>{
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n>1){
        return fibonocci(n-1)+fibonocci(n-2);
    }
}
console.log(fibonocci(6));
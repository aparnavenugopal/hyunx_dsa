const powerOfTwo = (n) => {
    if(n == 1 ) return true;
    if( n<= 0) return undefined;
    if(n%2 == 0){
        return powerOfTwo(n/2);
    }else{
        return false;
    }
}

const t = powerOfTwo(24);
console.log(t);
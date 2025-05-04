const rstr = (str) => {
    let lstr = str.toLowerCase();
    const check = (end) => {
        if(end<0) return '';
        if(lstr && end >=0){
            return lstr[end] + check(end-1);
        }
    }
    return check(lstr.length-1);
}

const t = rstr('kitty');
console.log(t);
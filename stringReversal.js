let str = "Hello world";
let str2=[];


const StringReversAL = str => {
    for(let i = str.length-1; i>=0; i--){
        str2.push(str[i]);
    }
    return str2.join('');
}

const t = StringReversAL(str);
console.log(t);


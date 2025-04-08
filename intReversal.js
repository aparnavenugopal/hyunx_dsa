let num = 1234;
let num2 =[];

const intReversal = num => {
    let str = num.toString();
    for(let i = str.length-1; i>=0; i--){
        num2.push(str[i]);
    }
    return parseInt(num2.join(''));
}

const t = intReversal(num);
console.log(t);
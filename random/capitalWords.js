let str = "hello world";
let str2 = [];


const CapitalWords = str => {
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            str2.push(str[i].toUpperCase());
        } else if (str[i - 1] === ' ') {  // Use else if
            str2.push(str[i].toUpperCase());
        } else {
            str2.push(str[i]);
        }
    }
    return str2.join('');
}

const t = CapitalWords(str);
console.log(t);


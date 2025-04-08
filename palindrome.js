let str = "c dddc";
let str2=[];

const Palindrome = str =>{
    for(let i=str.length-1;i>=0;i--){
        str2.push(str[i]);
    }
    let str3 = str2.join('');
    if(str3 === str){
        console.log('it is a palindrom')
        return true;
    }else{
        console.log('it is not a palindrom')
        return false;
    }
}

const t = Palindrome(str);
console.log(t);
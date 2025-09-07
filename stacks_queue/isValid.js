const isValid = (s) => {
  let stack = [];
  let map = {
    '{' : "}",
    "[" : "]",
    "(" : ")"
  }
  for(let i=0;i<s.length;i++){
    if(map[s[i]]){
        stack.push(s[i]);
    }else{
        let top = stack.pop();
        if(map[top] !== s[i]){
           return false;
        }
    }
  }
  return stack.length == 0;
}

const t = isValid('[{}]');
console.log(t);
const permutationWithLetterChange = (input) => {
  const recurse = (output, index) => {
     if(index == input.length){
        result.push(output);
        return;
     }

     if(/[a-z]/i.test(input[index])){
        recurse(output+input[index], index+1);
        recurse(output+ input[index].toUpperCase(), index+1);
     }else{
        recurse(output+input[index], index+1);
     }

  }
  let result = [];
  input = input.toLowerCase();
  if(/[a-z]/i.test(input[0])){
     recurse(input[0], index = 1);
     recurse(input[0].toUpperCase(), index=1);
  }else{
      recurse(input[0], index = 1);
  }
  return result;
}

const t = permutationWithLetterChange('1aB2c');
console.log(t);
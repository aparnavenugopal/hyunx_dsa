const permutationWithCaseChange = (input) => {
  const recurse = (output, index) => {
    if(index == input.length){
        result.push(output);
        return;
    }
    
    //small letter
    recurse(output + input[index], index+1);

    //capital letter
    recurse(output + input[index].toUpperCase(), index+1);
  }
  let result = [];
  recurse(input[0], index=1);
  recurse(input[0].toUpperCase(), index=1);
  return result;
}

const t = permutationWithCaseChange('abcd');
console.log(t);
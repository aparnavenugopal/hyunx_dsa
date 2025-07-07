const permutationWithSpaces = (input) => {
    const recurse = (output, index) => {
        if(index == input.length){
            result.push(output);
            return;
        }

        //add space+ nextchar
        recurse(output + " " + input[index], index+1);

        //add next char without space
        recurse(output + input[index], index+1);
    }
    const result = [];
    recurse(input[0],1);
    return result;
}

const t = permutationWithSpaces('abc');
console.log(t);
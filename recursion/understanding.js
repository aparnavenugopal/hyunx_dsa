const me = () => {
    return kitty();
}

const kitty = () => {
    return pavan();
}

const pavan = () => {
    return chandu();
}

const chandu = () => {
    return true;
}

const t = me();
console.log(t);

const gotToLunch = (person) => {
    if(person === 5) return true;//base condition
    console.log(person);
    return gotToLunch(person + 1);
}
const lunch = gotToLunch(1);
console.log(lunch);

const multiplyf = (arr) => {
    console.log(arr);
    if(arr.length === 0) return 1; //base condition
    return arr[arr.length - 1] * multiplyf(arr.slice(0, arr.length - 1));
}

console.log(multiplyf([1, 2, 3, 4])); 
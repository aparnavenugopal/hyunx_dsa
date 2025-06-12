//  function printSubsequences(arr, index = 0, current = []) {
//   if (index === arr.length) {
//     console.log("Printed:", current);
//     return;
//   }

//   console.log("Include", arr[index], "→", [...current, arr[index]]);
//   printSubsequences(arr, index + 1, [...current, arr[index]]);

//   console.log("Exclude", arr[index], "→", current);
//   printSubsequences(arr, index + 1, current);
// }

let count = 0;
function printSubsequences(arr, index = 0, current = []) {
  if (index === arr.length) {
    console.log(++count, "Printed:", current);
    return;
  }

  printSubsequences(arr, index + 1, [...current, arr[index]]);
  printSubsequences(arr, index + 1, current);
}


const t = printSubsequences([3,1,2]);
console.log(t);


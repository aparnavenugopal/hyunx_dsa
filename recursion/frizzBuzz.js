// 1.create a function called 'frizzbuzz' that takes two number arguments:
// "startNum" and "endNum".
// 2. the function will count from "startNum" to the "endNum" incrementing by 1
// each time and do the following:
// 3.if the number is:
// a. divisible by 3, print "Fizz" followed by the number;
// b. divisible by 5, print "Buzz" followed by the number;
// c. divisible by both 3 and 5, print "FizzBuzz"
// d. in all other cases, print the number itself.
// 4. the function should return an array of all the numbers printed.


//without recursion:

const rfb = (start, end) => {
    if (start > end) return [];

    let label = '';
    if (start % 3 === 0 && start % 5 === 0) {
        label = 'frizzbuzz';
    } else if (start % 3 === 0) {
        label = 'Frizz';
    } else if (start % 5 === 0) {
        label = 'Buzz';
    } else {
        label = start;
    }

    console.log(label);

    return [start, ...rfb(start +1, end)];
};

const t = rfb(0, 15);
console.log(t);
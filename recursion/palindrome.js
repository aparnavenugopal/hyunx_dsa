// 1.create a function called "palindrome" that will take a single String
// as an argument.
// 2.the function will return true if the string is a palindrome or false
// its not .
// 3.a string is a palindrome if it reads the same start-end as it does end-start.String
// 4.the function should be case insensitive.
// 5.example of palindromes:
// "racecar", "level", "madam", "civic", "radar", "refer", "deified",

const rsp = (str) => {
    const lstr = str.toLowerCase();

    const check = (start, end) => {
        if (start >= end) return `${str} is a palindrome`;

        if (lstr[start] === lstr[end]) {
            return check(start + 1, end - 1);
        } else {
            return `${str} is not a palindrome`;
        }
    };

    return check(0, lstr.length - 1);
};

const t = rsp('civic');
console.log(t);  // civic is a palindrome
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';
    if (s.length === 0) return '';
    
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > i; j--) {
            if (s[i] === s[j]) {
                let p = s.slice(i, j + 1);
                if (isPalindrome(p) && p.length > longest.length) {
                    longest = p;
                }
            }
        }
    }

    return longest || s[0]; // fallback if no palindrome longer than 1 char
};

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) return false;
        i++;
        j--;
    }
    return true;
}

//to do this you need to learn sliding window algorithm learn it
const LongestSubstringWithWithoutRepeatingCharacters = (s, k) => {
    let i = 0, j = 0;
    let str = '';
    let map = new Map();

    while (j < s.length) {
        let endChar = s[j];
        map.set(endChar, (map.get(endChar) ?? 0) + 1);

        // If duplicate character found, shrink window from left
        while (map.get(endChar) > 1) {
            let startChar = s[i];
            map.set(startChar, map.get(startChar) - 1);
            if (map.get(startChar) === 0) {
                map.delete(startChar);
            }
            i++;
        }

        // If window has exactly k distinct characters, consider it
        if (map.size === k) {
            const currentWindow = s.substring(i, j + 1);
            if (currentWindow.length > str.length) {
                str = currentWindow;
            }
        }

        j++;
    }

    return str;
};



const t = LongestSubstringWithWithoutRepeatingCharacters('aabacbebebe', 3);
console.log(t);
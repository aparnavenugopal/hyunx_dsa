const computeLps = (s) => {
    let lps = new Array(s.length).fill(0);
    let len = 0;
    let i = 1; 
    while (i < s.length) {
        if (s[i] === s[len]) {
            len++;
            lps[i] = len;
            i++;
        } else if (len !== 0) {
            len = lps[len - 1];
        } else {
            lps[i] = 0;
            i++;
        }
    }
    return lps;
}

const happy = (s) => {
    let lps = computeLps(s);
    let len = lps[s.length - 1];
    return len > 0 ? s.substring(0, len) : "";
}

const t = happy('abcbabx');
console.log(t); 
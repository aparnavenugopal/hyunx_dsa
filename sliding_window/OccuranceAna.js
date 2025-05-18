const isAnagram = (a, b) => {
  if (a.length !== b.length) return false;
  const freq = {};
  for (let char of a) freq[char] = (freq[char] || 0) + 1;
  for (let char of b) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
};

const occuranceOfAnagramCount = (str, p) => {
  let i = 0;
  let j = 0;
  let arr = [];
  let ind = [];
  while (j < str.length) {
    let wl = j - i + 1;
    if (wl < p.length) {
      arr.push(str[j]);
      j++;
    } else if (wl == p.length) {
      arr.push(str[j]);
      if (isAnagram(p, arr.join(''))) {
        ind.push(i);
      }
      arr.shift();
      i++;
      j++;
    }
  }
  return ind;
}

function findAnagramIndices(text, pattern) {
  const freqMap = {};

  // Build the frequency map for the pattern
  for (let char of pattern) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  let count = Object.keys(freqMap).length;
  let windowSize = pattern.length;
  let i = 0; // start of the window
  const result = [];

  for (let j = 0; j < text.length; j++) {
    const endChar = text[j];

    if (endChar in freqMap) {
      freqMap[endChar]--;
      if (freqMap[endChar] === 0) count--;
    }

    if (j - i + 1 < windowSize) continue;

    if (count === 0) {
      result.push([i, j]);  // Store start and end indices of the valid window
    }

    const startChar = text[i];
    if (startChar in freqMap) {
      if (freqMap[startChar] === 0) count++;
      freqMap[startChar]++;
    }

    i++; // Slide the window
  }

  return result;
}

console.log(findAnagramIndices("aabacaabad", "aab"));

const t = occuranceOfAnagramCount('cbaebabacd', 'abc');
console.log(t);
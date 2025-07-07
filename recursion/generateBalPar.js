function generateParentheses(n) {
  const result = [];

  function recurse(current, open, close) {
    // Base case: when no more brackets left to add
    if (open === 0 && close === 0) {
      result.push(current);
      return;
    }

    // If we can still add an opening bracket
    if (open > 0) {
      recurse(current + "(", open - 1, close);
    }

    // If we can add a closing bracket (only if more closing left than opening)
    if (close > open) {
      recurse(current + ")", open, close - 1);
    }
  }

  recurse("", n, n);
  return result;
}

// Example:
console.log(generateParentheses(3));
const fibonacci = function(n) {
    // Convert input to a number
  n = parseInt(n);

  // Check that input is a positive integer
  if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
    return "OOPS";
  }

  // Compute Fibonacci sequence
  if (n <= 1) {
    return n;
  }
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the string is a palindrome
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}


// Do not edit below this line
module.exports = palindromes;

const removeFromArray = function(arr, ...elements) {
    const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!elements.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;

};

// Do not edit below this line
module.exports = removeFromArray;

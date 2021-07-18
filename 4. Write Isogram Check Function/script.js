const isIsogram = (str) => {
  // change the string to lowercase
  const newStr = str.toLowerCase();

  // change the string to an array, use the every function (every function and it's callback gives us access to the value and index of each iteration)
  const result = newStr
    .split("")
    .every((value, index) => newStr.indexOf(value) === index);
  return result;
};

console.log(isIsogram("ambidExtRously")); // true
console.log(isIsogram("patteRN")); // false

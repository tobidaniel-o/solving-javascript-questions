const alphabets = "abcdefghijklmnopqrstuvwxyz";

const isPangram = (str) => {
  // change strings to lowercase
  // split strings to change it back to a string
  // sort the strings using the Set object
  // join the strings
  
  // Using regular String and Array methods
  // const trimAndLowerCasePangram = [
  //   ...new Set(str.toLowerCase().split(" ").join("")),
  // ]
  //   .sort()
  //   .join("");
  // return trimAndLowerCasePangram === alphabets;

  // Using Regex
  const regexMatch = new Set(str.toLowerCase().match(/[a-z]/gi));
  return regexMatch.size === 26;
};
console.log(isPangram("The quick Brown fox jumps over the lazy DOG"));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(isPangram("abcdefghpqrstuvwxyz"));

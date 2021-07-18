const alphabets = "abcdefghijklmnopqrstuvwxyz";

const isPangram = (str) => {
  // change strings to lowercase
  // split strings to change it back to a string
  // sort the strings using the Set object
  // join the strings
  const trimAndLowerCasePangram = [
    ...new Set(str.toLowerCase().split(" ").join("")),
  ]
    .sort()
    .join("");
  return trimAndLowerCasePangram === alphabets;
};
console.log(isPangram("The quick Brown fox jumps over the lazy DOG"));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(isPangram("abcdefghpqrstuvwxyz"));


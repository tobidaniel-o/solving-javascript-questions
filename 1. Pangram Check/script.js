const isPangram = (pangram) => {
  // trim all spaces and convert all alphabets to toLowerCase
  let trimAndLowerCasePangram = pangram.trim().toLowerCase();

  // convert the string to an array
  let splitPangram = trimAndLowerCasePangram.split("");
  // if any alphabet is not found return false and break out of loop
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // else, keep looping, return true

  for (let i = 0; i < splitPangram.length; i++) {
    if (!alphabets.includes(splitPangram[i])) {
      return false;
    }
  }
};

console.log(isPangram("   The quick Brown fox jumps over the lazy DOG  "));
console.log(isPangram("The quick fox jUMPs over the lazy DOG"));

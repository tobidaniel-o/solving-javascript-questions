const toRainLanguage = (num) => {
  let result = "";

  if (num % 3 === 0) result += "Pling";
  if (num % 5 === 0) result += "Plang";
  if (num % 7 === 0) result += "Plong";

  return result || num;
};

console.log(toRainLanguage(15)); // PlingPlang
console.log(toRainLanguage(35)); // PlangPlong
console.log(toRainLanguage(21)); // PlingPlong
console.log(toRainLanguage(2)); // 2

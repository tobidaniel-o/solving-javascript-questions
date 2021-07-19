const isLeapYear = (year) => {
  const numYear = Number(year);
  // if (numYear % 100 === 0) {
  //   return numYear % 400 === 0;
  // } else {
  //   return numYear % 4 === 0;
  // }

  // Using the Ternary operator
  return numYear % 100 === 0 ? numYear % 400 === 0 : numYear % 4 === 0;
};

console.log(isLeapYear("2020"));
console.log(isLeapYear("2018"));
console.log(isLeapYear("1700"));
console.log(isLeapYear("1600"));

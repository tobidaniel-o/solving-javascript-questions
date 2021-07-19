const removeDuplicatesUsingSet = (arr) => {
  const result = [...new Set(arr)];
  console.log(result);
};

const removeDuplicatesUsingReduce = (arr) => {
  return arr.reduce((accumulator, value) => {
    return accumulator.includes(value) ? accumulator : [...accumulator, value];
  }, []);
};

removeDuplicatesUsingSet([
  "one",
  "two",
  "one",
  "three",
  "three",
  "two",
  "four",
  "four",
  "four",
]);

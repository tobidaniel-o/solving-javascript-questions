const map = (array, callback) => {
  return array.reduce((accumulator, val) => {
    return [...accumulator, callback(val)];
  }, []);
};

console.log(map([1, 2, 3], (value) => value + 2));

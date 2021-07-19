const transposeMatrix = (array) => {
  return array[0].map((_, index) => array.map((value) => value[index]));
  // return array[0].map((_, i) => array.map((v) => v[i]));
};

console.log(transposeMatrix([[1, 2, 3], [1, 2, 3], , [1, 2, 3]]));

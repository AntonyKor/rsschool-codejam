function sumOfOther(array) {
  let sum = array.reduce((acc, item) => acc + item);
  return array.map(item => sum - item);
}
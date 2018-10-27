function sumOfOther(array) {
  const sum = array.reduce((acc, item) => acc + item);
  return array.map(item => sum - item);
}

console.log(sumOfOther([2, 3, 4, 1]))
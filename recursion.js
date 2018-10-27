function recursion(node) {
  const left = node.left ? recursion(node.left) : [];
  const right = node.right ? recursion(node.right) : [];

  const leftPlusRight = [];
  let maxLength = Math.max(left.length, right.length);
  for (let i = 0; i < maxLength; i++) {
    leftPlusRight[i] = [].concat(left[i], right[i]);
  }

  return([[node.value]].concat(leftPlusRight))
}
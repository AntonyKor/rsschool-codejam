function make(...args) {
  let array = args;

  return function makeInner(...argsIn) {
    if (argsIn[0] instanceof Function) return array.reduce(argsIn[0]);

    array = array.concat(argsIn);

    return makeInner;
  }
}
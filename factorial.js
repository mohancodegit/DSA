function factoial(n) {
  let result = 1;
  for (i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factoial(0));

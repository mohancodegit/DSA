function fibonacci(n) {
  const fib = [0, 1];
  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.pop();
}

console.log(fibonacci(100))
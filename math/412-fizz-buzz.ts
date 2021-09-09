function fizzBuzz(n: number): string[] {
  let res = [];

  for (let i = 0; i < n; ++i) {
    let tmp = i + 1;
    if (tmp % 3 === 0 && tmp % 5 === 0) {
      res[i] = "FizzBuzz";
    } else if (tmp % 3 === 0) {
      res[i] = "Fizz";
    } else if (tmp % 5 === 0) {
      res[i] = "Buzz";
    } else {
      res[i] = "" + tmp;
    }
  }

  return res;
};
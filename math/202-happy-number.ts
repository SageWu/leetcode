function isHappy(n: number): boolean {
  let sumArr = new Set();
  let sum = 0;
  while (n !== 1) {
    while (n !== 0) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }

    if (sumArr.has(sum)) return false;

    sumArr.add(sum);
    n = sum;
    sum = 0;
  }

  return true;
};
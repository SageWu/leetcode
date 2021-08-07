function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let res = 0;
  for (let i = 0; i < timeSeries.length; ++i) {
    if (i + 1 < timeSeries.length) {
      res += Math.min(duration, timeSeries[i + 1] - timeSeries[i])
    } else {
      res += duration;
    }
  }

  return res;
};
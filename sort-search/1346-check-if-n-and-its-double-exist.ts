function checkIfExist(arr: number[]): boolean {
  while (arr.length) {
    let num = arr.pop();
    if (arr.includes(num * 2) || arr.includes(num / 2)) return true;
  }

  return false;
}

// function checkIfExist(arr: number[]): boolean {
//   let cache = new Map();
//   for (let i = 0; i < arr.length; ++i) {
//     cache.set(2 * arr[i], i);
//   }
//   for (let i = 0; i < arr.length; ++i) {
//     if (cache.has(arr[i]) && cache.get(arr[i]) !== i) {
//       return true;
//     }
//   }

//   return false;
// };
/**
 * 找出两个数组共有的元素，且下标和是最小的
 */
function findRestaurant(list1: string[], list2: string[]): string[] {
  let cache = new Map();
  for (let i = 0; i < list1.length; ++i) {
    cache.set(list1[i], i);
  }

  let sum = Number.MAX_SAFE_INTEGER;
  let res = [];
  for (let i = 0; i < list2.length; ++i) {
    if (cache.has(list2[i])) {
      let tmp = i + cache.get(list2[i]);
      if (tmp <= sum) {
        if (tmp < sum) res = [];
        sum = tmp;
        res.push(list2[i]);
      }
    }
  }

  return res;
}

// function findRestaurant(list1: string[], list2: string[]): string[] {
//   let len1 = list1.length;
//   let len2 = list2.length;
//   let res = [];
//   let sum = Number.MAX_SAFE_INTEGER;
//   for (let i  = 0; i < len1; ++i) {
//     for (let j = 0; j < len2; ++j) {
//       if (list1[i] === list2[j] && i + j <= sum) {
//         if (i + j < sum) {
//           res = [];
//         }
//         len2 = list2.length - (list2.length - j) + 1;
//         sum = i + j;
//         res.push(list1[i]);
//       }
//     }
//   }

//   return res;
// };
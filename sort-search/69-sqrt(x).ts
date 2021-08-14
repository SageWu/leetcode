/**
 * 开平方根号
 */
function mySqrt(x: number): number {
  let res = x;
  while (res * res > x) {
    res = Math.floor((res + x / res) / 2);
  }
  return res;
}

// function mySqrt(x: number): number {
//   let left = 0;
//   let right = Math.ceil(x / 2);
//   let mid;
  
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     let tmp = mid * mid;
//     if (tmp < x) {
//       left = mid + 1;
//     } else if (tmp > x) {
//       right = mid - 1;
//     } else {
//       return mid;
//     }
//   }

//   return right;
// };
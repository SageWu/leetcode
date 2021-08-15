/**
 * 二进制字符串相加
 */
function addBinary(a: string, b: string): string {
  let aNum = BigInt("0b" + a);
  let bNum = BigInt("0b" + b);
  return (aNum + bNum).toString(2);
};
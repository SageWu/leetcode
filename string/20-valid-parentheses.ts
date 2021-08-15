/**
 * 判断括号组成的字符串是否正确
 */
function isValid(s: string): boolean {
  let stack = [];
  let cache = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["]
  ]);
  for (let i = 0; i < s.length; ++i) {
    if (
      s[i] === "(" ||
      s[i] === "{" ||
      s[i] === "["
    ) {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === cache.get(s[i])) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  return stack.length === 0;
};
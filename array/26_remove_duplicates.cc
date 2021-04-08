#include <vector>
#include <algorithm>

using namespace std;

/**
 * 问题：给定一个已经排好序的数组，去除重复的项，使得前n项唯一
 */

/**
 * 依赖已经排好序的前提
 * 1、设置当前遇到的最新数字为下标0的数字
 * 2、从下标1开始遍历数组
 * 3、当遇到不同的数字时，将其堆积在前面，并更新为最新数字
 * 4、直到遍历完数组
 */
class Solution {
public:
  int removeDuplicates(vector<int>& nums) {
    if (nums.size() == 0) return 0;

    int i = 0, j = 1;
    for(; j < nums.size(); ++j) {
      if (nums[j] != nums[i]) {
        ++i;
        if (i != j) {
          nums[i] = nums[j];
        }
      }
    }
    return i + 1;
  }
};

class Solution1 {
public:
  int removeDuplicates(vector<int>& nums) {
    return distance(begin(nums), unique(begin(nums), end(nums)));
  }
};

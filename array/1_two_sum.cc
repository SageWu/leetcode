#include <vector>
#include <unordered_map>
#include <unordered_set>

using namespace std;

/**
 * 问题：
 * 给定一个数组 nums，和一个数字 target
 * 在 nums 中寻找两个数字相加等于 target，返回其下标
 */

/**
 * 1、遍历 nums，获取 num
 * 2、计算相加等于 target 的剩余数
 * 3、检测是否存在 map 中
 * 4、如果不存在，则把当前 num 及其下标放入 map，继续遍历
 * 5、如果存在，则直接从 map 中获取剩余数的下标，返回结果
 */
class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> mem;
    vector<int> res;

    for (int i = 0; i < nums.size(); ++i)
    {
      int num = nums[i];
      int remain = target - num;
      if (mem.find(remain) != mem.end()) {
        res.push_back(mem[remain]);
        res.push_back(i);
        return res;
      } else {
        mem[num] = i;
      }
    }

    return res;
  }
};

/**
 * 1、遍历 nums，获取 num
 * 2、计算相加等于 target 的剩余数
 * 3、检测是否存在 set 中
 * 4、如果不存在，则把 num 放入 set 中
 * 5、如果存在，则证明之前出现过，从头开始遍历，找出其下标，并返回结果
 */
class Solution1 {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    unordered_set<int> mem;
    vector<int> res;

    for (int i = 0; i < nums.size(); ++i)
    {
      int num = nums[i];
      int remain = target - num;
      if (mem.find(remain) != mem.end()) {
        for (int j = 0; j < nums.size(); ++j) {
          if (nums[j] == remain) {
            res.push_back(j);
            res.push_back(i);
            return res;
          }
        }
      } else {
        mem.insert(num);
      }
    }

    return res;
  }
};
// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/description/
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0







function countGoodPairs(nums) {
    const numFrequency = {};
    let goodPairsCount = 0;

    // Count the frequency of each number
    for (const num of nums) {
        console.log(`${num}===`,numFrequency[num]);
        if (numFrequency[num]) {
            // If the number already exists in the map, increment the count
            
            goodPairsCount += numFrequency[num];
            console.log(`inside If------------------`,goodPairsCount)
            numFrequency[num]++;
        } else {
            // If the number is not in the map, add it with a count of 1
            console.log(`inside ELSE----`,numFrequency[num])
            numFrequency[num] = 1;
        }
    }
    // console.log(`numFrequency====>`,numFrequency);
    return goodPairsCount;
}

// Example usage:
const nums = [1, 2, 3, 1, 1, 3];
const result = countGoodPairs(nums);

console.log(result);
//  0, 1, 2, 3, 4, 5
// [1, 2, 3, 1, 1, 3]
// (0,3), (0,4), (3,4), (2,5)
// (1)
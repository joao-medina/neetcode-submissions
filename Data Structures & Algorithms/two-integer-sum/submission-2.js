class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let c = 0; c < nums.length; c++) {
            const complement = target - nums[c]

            if(map.has(complement)) {
                return [map.get(complement), c]
            }

            map.set(nums[c], c)
        }
    }
}

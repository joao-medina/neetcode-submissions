class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const output = [];

        for(let c = 0; c < nums.length; c++) {
            for(let p = c + 1; p < nums.length; p++) {
                if(nums[c] + nums[p] === target) {
                    output.push(c, p)
                }
            }
        }

        return output
    }
}

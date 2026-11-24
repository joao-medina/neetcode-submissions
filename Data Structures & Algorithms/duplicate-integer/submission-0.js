class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let containsDuplicate = false;

        nums.forEach((num, index) => {
            nums.forEach((numToCheck, indexToCheck) => {
                if(index === indexToCheck) {
                    return;
                }

                let c = 0;
                if(num === numToCheck) {
                    c++
                }

                if(c === 1) {
                    containsDuplicate = true 
                }
            })
        })

        return containsDuplicate;
    }
}

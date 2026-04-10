class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let output = [];
        let complement = {};

        for (let i=0; i < nums.length; i++) {
            let comp = target - nums[i];
            complement[comp] = i;
        }

        for (let i=0; i < nums.length; i++) {
            if (complement.hasOwnProperty(nums[i]) && i !== complement[nums[i]]) {
                return [i, complement[nums[i]]]
            }
        }

        return output;
    }
}
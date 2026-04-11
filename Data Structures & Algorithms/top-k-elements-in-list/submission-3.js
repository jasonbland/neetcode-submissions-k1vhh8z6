class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequencies = {};
        let result = [];
        for (let i=0; i < nums.length; i++) {
            if (frequencies.hasOwnProperty(nums[i])) {
                frequencies[nums[i]] += 1
            } else {
                frequencies[nums[i]] = 1
            }
        }

        let freq = [];
        for (let key in frequencies) {
            freq.push([parseInt(key), frequencies[key]])
        }

        freq.sort((a, b) => b[1] - a[1]);

        for (let i=0; i < k; i++) {
            result.push(freq[i][0]);
        }
        return result;
    }
}
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};
        let result = [];
        
        for (let i=0; i < strs.length; i++) { 
            let group = strs[i].split('').sort().join('');

            if (groups.hasOwnProperty(group)) {
                groups[group].push(strs[i])
            } else {
                groups[group] = [strs[i]]
            }

        }
        
        for (const key in groups) {
            result.push(groups[key])
        }

        return result;
    }
}

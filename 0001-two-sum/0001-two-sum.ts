function twoSum(nums: number[], target: number): number[] {
// hashmap implementation
// we make a map of every number and its index, then lookup the complement (target minus number)

    let map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i <nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) return [i, map.get(complement)];
    }
};
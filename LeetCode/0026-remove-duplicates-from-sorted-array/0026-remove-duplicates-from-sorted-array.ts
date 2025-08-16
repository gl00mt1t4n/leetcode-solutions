function removeDuplicates(nums: number[]): number {
    if (nums.length <= 1) return nums.length;
    let new_num_index = 0;
    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        if (curr != nums[new_num_index]) {
            nums[new_num_index + 1] = curr;
            new_num_index++;
        }
    }
    return new_num_index + 1;
};
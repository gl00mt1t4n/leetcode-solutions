function removeElement(nums: number[], val: number): number {
    let val_index = 0; // next index to place the non val number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[val_index] = nums[i];
            val_index++;
        }
    }
    return val_index;
};
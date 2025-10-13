function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let m = nums1.length;
    let n = nums2.length;
    let i = 0, j = 0, count = 0;
    let left_mid = Math.floor((m + n - 1) / 2);
    let right_mid = Math.floor((m + n) / 2);
    let left_val = 0, right_val = 0;

    while (count <= right_mid) {
        let current: number;
        if (i < m && (j >=n || nums1[i] < nums2[j])) {
            current = nums1[i];
            i++;
        }
        else {
            current = nums2[j];
            j++;
        }

        if (count == left_mid) left_val = current;
        if (count == right_mid) right_val = current;
        count++;
    }
    return (m + n) % 2 === 0 ? (left_val + right_val) / 2 : right_val;
};
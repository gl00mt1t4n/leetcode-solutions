function maxArea(height: number[]): number {
    let i = 0, j = height.length - 1;
    let max = 0;
    let fin_l = 0, fin_h = 0;
    let product = 0;
    while ( i < j) {
        let length = Math.abs(i - j);
        let h = Math.min(height[i], height[j]);
        product = length * h;
        if (product > max) {
            max = product;
            fin_l = length;
            fin_h = h;
        }
        if (height[i] > height[j]) j--;
        else i++;
    }
    return max;
};
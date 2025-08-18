function mySqrt(x: number): number {
// now we will try the binary search one, very intuitive

    if (x < 2) return x;
    let low = 1;
    let ans = 0;
    let hi = x;

    while (low <= hi) {
        let mid = Math.floor((low + hi) /2);
        if (mid <= Math.floor(x/mid)) {
            low = mid + 1;
            ans = mid;
        }
        else {
            hi = mid - 1;
        }
    }
    return ans;
};
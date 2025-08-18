function mySqrt(x: number): number {
// The logic here is that any perfect square is the sum of k consecutive odd numbers starting from 1
// 
    if (x < 2) return x;
    let k = 0;
    let odd = 1;
    while (x >= odd) {
        x -= odd;
        k++;
        odd += 2;
    }
    return k;
};
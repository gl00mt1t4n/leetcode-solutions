let memo = new Map<number, number>;

function climbStairs(n: number): number {
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (memo.has(n)) return memo.get(n);
    let result = climbStairs(n-1) + climbStairs(n-2);
    memo.set(n, result);
    return result;
};
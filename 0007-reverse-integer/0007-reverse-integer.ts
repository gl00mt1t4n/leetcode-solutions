function reverse(x: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const MAX_DIV10 = Math.trunc(INT_MAX / 10);
  const MAX_TAIL  = INT_MAX % 10; // i think its 7

  let n = Math.abs(x);
  let res = 0;

  while (n !== 0) {
    let d = n % 10;
    n = Math.floor(n / 10);
    if (res > MAX_DIV10 || (res === MAX_DIV10 && d > MAX_TAIL)) return 0;

    res = res * 10 + d;
  }
  return x < 0 ? -res : res;
}

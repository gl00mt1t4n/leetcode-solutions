function myAtoi(s: string): number {
    let dup = s.trimStart();
    let r = 0;
    let negative = false
    if (dup[0] === '-' || dup[0] === '+') {
        if (dup[0] === '-') negative = true;
        dup = dup.slice(1);
    }

    for (const ch of dup) {
        if (ch < '0' || ch > '9') break;
        r = r*10 +  (ch.charCodeAt(0)-48);
    }
    r = negative? -r: r;
    if (r < -(2**31)) return -(2**31);
    if (r > (2**31 - 1)) return 2**31 -1;
    return r;
};
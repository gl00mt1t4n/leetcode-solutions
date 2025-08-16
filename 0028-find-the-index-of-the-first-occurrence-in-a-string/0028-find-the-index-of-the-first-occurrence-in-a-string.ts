function strStr(haystack: string, needle: string): number {
    if (needle.length > haystack.length) return -1;

    let length = needle.length;

    for (let i = 0; i <= haystack.length - length; i++) {
        if (haystack.slice(i, i+length) === needle) return i;
    }
    return -1;
};
function lengthOfLastWord(s: string): number {
    s = s.trimEnd();
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            return s.slice(i + 1).length;
        }
    }
    return s.length;
};
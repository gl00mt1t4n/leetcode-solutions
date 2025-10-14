function longestPalindrome(s: string): string {
    let longest = 1;
    let word:string = s[0];
    let window = 0;
    for (let i = 0; i < s.length - 1; i++) {
        window = 0;
        while (i - window >=0 && i+window < s.length) {
            if (s[i-window] === s[i+window]) {
                if (s.slice(i-window, i+window+1).length >= longest) {
                    longest = s.slice(i-window, i+window+1).length;
                    word = s.slice(i-window, i+window+1);
                }
            }
            else break;
            window++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        window = 0;
        while (i + window + 1 < s.length && i - window >= 0) {
            if (s[i-window] === s[i+1+window]) {
                if (s.slice(i-window, i+window+2).length >= longest) {
                    longest = s.slice(i-window, i+window+2).length;
                    word = s.slice(i-window, i+window+2);
                }
            }
            else break;
            window++;
        }
    }
    return word
    // above was for odd palindromes
};
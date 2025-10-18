function generateParenthesis(n: number): string[] {
    let cur: string[] = [], res:string[] = [];

    function rec(open:number, close:number) {
        if (cur.length == 2*n) {
            res.push(cur.join(''));
            return;
        }
        if (open < n) {
            cur.push('(');
            rec(open + 1, close);
            cur.pop();    
        }
        if (close < open) {
            cur.push(')');
            rec(open, close + 1);
            cur.pop();
        } 
    }
    rec(0, 0);
    return res;
};
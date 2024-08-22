function strangePrinter(s: string): number {
    const n = s.length;

    // Create a 2D DP array where dp[i][j] represents the minimum number of turns needed to print the substring s[i...j].
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    // Loop over the possible lengths of the substring
    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {

            dp[i][j] = dp[i][j - 1] + 1;

            // Try splitting the substring into two parts and calculate the minimum turns
            for (let k = i; k < j; k++) {
                if (s[k] == s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j - 1]);
                }
            }
        }
    }

    return dp[0][n - 1];
}

/*
abcabc ->5 turns
aaaaaa a->(0-5)
abaaaa b->(1-1)
abcaaa
abcaba
abcabc
*/




// 1. Brute Force
function generateParenthesis(n: number): string[] {
    // Only Add open Paranthesis if open < n
    // Only add a closing Paranthesis if closed < open
    // Valid IIF open == close == n
    const res: string[] = [];  // To store the result of valid combinations
    const sol: string[] = [];  // To build the current combination of parentheses
let count = 1
    function backtrack(num_open, num_close) {
       console.log(count)
        // If we have used n open and n close parentheses, add the result
        if (num_open === n && num_close === n) {
            res.push(sol.join(''));  // Join sol array into a string and add to result
            return;
        }

        // If we can add an open parenthesis
        if (num_open < n) {
            sol.push('(');  // Add open parenthesis to sol
            backtrack(num_open + 1, num_close);  // Recurse with updated counts
            sol.pop();  // Backtrack by removing last character
        }

        if (num_close < num_open) {
            sol.push(')');  // Add close parenthesis to sol
            backtrack(num_open, num_close + 1);  // Recurse with updated counts
            sol.pop();  // Backtrack by removing last character
        }
 count ++
    }
    // Start the backtracking process
    backtrack(0, 0);

    return res;
};
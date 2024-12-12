const cache: { [key: number]: number } = {};
function climbStairs(n: number): number {

    if (n === 1) return 1;
    if (n === 2) return 2;

    if (n in cache) return cache[n];
    return (cache[n] = climbStairs(n - 1) + climbStairs(n - 2));
   
    /*
        let one = 2;
        let two = 1;
        let temp;
    
        for (let i = 3; i <= n; i++) {
            temp = one;     // Current step ways
            one = one + two // Move to next step
            two = temp       // Move to next step
        }
        return one;
    */

    /* Recursive, time Complexity is O(2^n)!
     return(climbStairs(n-1) + climbStairs(n-2))
     */
};

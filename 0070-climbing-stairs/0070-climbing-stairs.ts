function climbStairs(n: number): number {
        return n <= 3 
        ? n 
        : 2 * climbStairs(n - 2) + climbStairs(n - 3);
    if (n === 1) return 1;
    if (n === 2) return 2;

    let one = 2;
    let two = 1;
    let temp;

    // Iterate from the third step to the last step
    for (let i = 3; i <= n; i++) {
        temp = one; // Current step ways
        one = one + two // Move to next step
        two = temp       // Move to next step
    }

    return one;
    /* if(n===1) return 1
     if (n===2) return 2
 
     return(climbStairs(n-1) + climbStairs(n-2))
     */


};
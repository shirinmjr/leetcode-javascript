/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    const trustCounts = new Array(n + 1).fill(0); // Initialize an array to store trust counts
    //console.log(trustCounts)
    // Iterate through the trust array using a for...of loop.
    //For each trust relationship[a, b],
    //we decrement the count for person a(since they are trusting someone else)
    //and increment the count for person b(since they are being trusted).
    for (const [a, b] of trust) {
        trustCounts[a]--; // Decrement trust count for person a
        trustCounts[b]++; // Increment trust count for person b
        // console.log(trustCounts)

    }

    // Check for the person who is trusted by everyone else except themselves
    for (let i = 1; i <= n; i++) {
        if (trustCounts[i] === n - 1) { // If the count is n - 1, this person satisfies properties 1 and 2
            // console.log("there is a judge",trustCounts)

            return i; // Return the label of the town judge
        }
    }
    //console.log("no judge",trustCounts)
    return -1; // Return -1 if no town judge found
}


//console.log(findJudge(2, [[1,2]])); // Output: 2
//console.log(findJudge(3, [[1,3],[2,3]])); // Output: 3
//console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // Output: -1
//console.log(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]));
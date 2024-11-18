function longestStrChain(words: string[]): number {
    // Step 1: Sort the words by their length.
    // This ensures that we process shorter words first, so their chains are already calculated
    // when we encounter longer words.
    words.sort((a, b) => a.length - b.length);

    // Step 2: Create a map to store the length of the longest chain ending with each word.
    const dp = new Map<string, number>();

    // Step 3: Initialize a variable to track the maximum chain length.
    let maxLength = 1;

    // Step 4: Iterate through each word in the sorted list.
    for (const word of words) {
        // Start with a chain length of 1 for the current word.
        let currentLength = 1;

        // Step 5: Generate all possible predecessors by removing one character at a time.
        for (let i = 0; i < word.length; i++) {
            // Remove the character at index i to form a potential predecessor.
            const predecessor = word.slice(0, i) + word.slice(i + 1);

            // Check if this predecessor exists in the map (dp).
            if (dp.has(predecessor)) {
                // If the predecessor exists, calculate the new chain length by adding 1.
                // Update currentLength to the maximum chain length found so far.
                currentLength = Math.max(currentLength, dp.get(predecessor)! + 1);
            }
        }

        // Step 6: Store the chain length for the current word in the map.
        dp.set(word, currentLength);

        // Step 7: Update the maximum chain length found across all words.
        maxLength = Math.max(maxLength, currentLength);
    }

    // Step 8: Return the maximum chain length found.
    return maxLength;
}

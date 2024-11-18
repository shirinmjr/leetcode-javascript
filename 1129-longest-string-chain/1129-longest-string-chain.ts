function longestStrChain(words: string[]): number {
    // Sort words by length
    words.sort((a, b) => a.length - b.length);

    const dp = new Map<string, number>();
    let maxLength = 1;

    for (const word of words) {
        let currentLength = 1;

        // Check all possible predecessors by removing one character
        for (let i = 0; i < word.length; i++) {
            const predecessor = word.slice(0, i) + word.slice(i + 1);
            if (dp.has(predecessor)) {
                currentLength = Math.max(currentLength, dp.get(predecessor)! + 1);
            }
        }

        dp.set(word, currentLength);
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

function reverseStr(s: string, k: number): string {
    const strArray = s.split(""); // Convert string to array for mutability

    // let tempStr = s.slice(2k)
    for (let i = 0; i < s.length; i += 2 * k) {
        // Reverse the first k characters of every 2k chunk
        const end = Math.min(i + k, s.length); // Ensure we don't go out of bounds
        const reversedPart = strArray.slice(i, end).reverse(); // Reverse the chunk
        strArray.splice(i, reversedPart.length, ...reversedPart); // Replace original with reversed
    }
    return strArray.join("")
};
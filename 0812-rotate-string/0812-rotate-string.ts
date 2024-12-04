function rotateString(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false; // Lengths must match
    return (s + s).includes(goal); // Check if goal is a substring of s + s
}
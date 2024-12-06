function firstUniqChar(s: string): number {
if(s.length===0) return -1
if(s.length===1) return 0
    const strMap = new Map<string, number>()
    for (const ch of s) {
        strMap.has(ch) ? strMap.set(ch, strMap.get(ch) + 1) : strMap.set(ch, 1);
        // strMap.set(ch, (strMap.get(ch) || 0) + 1);
    }
    //Find the first character with a count of 1
    for (let i = 0; i < s.length; i++) {
        if (strMap.get(s[i]) === 1) return i
    }
    return -1
};
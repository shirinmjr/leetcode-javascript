function reverseStr(s: string, k: number): string {
    if (s.length === 0) return ""
    let sArray = s.split("")

    for (let i = 0; i < s.length; i += 2 * k) {
        const end = Math.min(i + k, s.length);
        const reveresdPart = sArray.slice(i, end).reverse()
        sArray.splice(i,reveresdPart.length,...reveresdPart)
    }
    return sArray.join("")
};
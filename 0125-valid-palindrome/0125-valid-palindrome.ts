function isPalindrome(s: string): boolean {
    //const noSpace = s.replace(/\s/g,"")
    const cleanSring = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    const reverseString = cleanSring.split("").reverse().join("")
    return reverseString === cleanSring
};
function groupAnagrams(strs: string[]): string[][] {

    const myMap = new Map<string, string[]>();

    for (const str of strs) {
        let sortedStr = str.split("").sort().join("")
        if (!myMap.has(sortedStr)) {//create new key and add the first member
            myMap.set(sortedStr, []);
        }
        //find the key and push the member
        myMap.get(sortedStr)!.push(str)



    }
    return Array.from(myMap.values())
};

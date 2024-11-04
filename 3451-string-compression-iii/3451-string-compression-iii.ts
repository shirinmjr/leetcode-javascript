function compressedString(word: string): string {
    let comp: string = "";
    let n: number = word.length;


    for (let i: number = 0; i < n;) {

        let char: string = word[i]
        let k: number = i + 9;
        let length: number = 0;

        while (i < n && i < k && word[i] === char) {
            length +=1
            i +=1
        }
        comp += length.toString() + char;
    }
    return comp;

};